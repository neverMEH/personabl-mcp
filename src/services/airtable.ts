import axios from 'axios';

interface WaitlistEntry {
  Name: string;
  Email: string;
  Company: string;
  Message?: string;
  Status: 'Joined Waitlist';
}

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID;

const airtableApi = axios.create({
  baseURL: 'https://api.airtable.com/v0',
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Add response type for better error handling
interface AirtableErrorResponse {
  error?: {
    message?: string;
    type?: string;
  };
}

export const createWaitlistEntry = async (data: Omit<WaitlistEntry, 'Status'>): Promise<void> => {
  try {
    console.log('Submitting to Airtable:', {
      baseId: AIRTABLE_BASE_ID,
      tableId: AIRTABLE_TABLE_ID,
      data
    });
    
    await airtableApi.post(`/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      records: [
        {
          fields: {
            ...data,
            Status: 'Joined Waitlist',
          },
        },
      ],
    });
  } catch (error) {
    console.error('Error creating waitlist entry:', error);
    
    if (axios.isAxiosError(error) && error.response?.data) {
      const airtableError = error.response.data as AirtableErrorResponse;
      const errorMessage = airtableError.error?.message || error.message;
      throw new Error(`Failed to submit waitlist entry: ${errorMessage}`);
    }
    
    throw error;
  }
};
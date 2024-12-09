// utils/api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Alert } from 'react-native';

const API_BASE_URL = 'http://10.0.2.2:5000'; // Replace with your base URL

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Optional: set a timeout
  headers: {
    'Content-Type': 'application/json',
  },
});
apiClient.interceptors.request.use(request => {
    console.log('Request:', {
      url:API_BASE_URL+request.url,
      method: request.method,
      headers: request.headers,
      data: request.data,
      params: request.params,
    });
    return request;
  });
  
  // Response interceptor for logging responses
  apiClient.interceptors.response.use(
    response => {
      console.log('Response:',response, {
        status: response.status,
        data: response.data,
      });
      return response;
    },
    error => {
      console.log('Error Response:',error, {
        status: error.status,
        data: error,
      });
      return Promise.reject(error);
    }
  );
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string | T ;
  error?: string;
}

export const apiRequest = async <T = any>(
  endpoint: string,
  options: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await apiClient(endpoint, options);
    return {
      success: true,
      data: response.data,
      message:  'Request successful', //response?.data?.message ||
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || 'An unexpected error occurred';
    return {
      success: false,
      error: errorMessage,
      message: errorMessage,
    };
  }
};

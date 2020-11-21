import { apiClient} from './client'

const endpoint = '/auth';

export const Login = (email, password) => 
    apiClient.post(endpoint, {email, password})
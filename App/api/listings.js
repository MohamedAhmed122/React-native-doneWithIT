import {apiClient } from './client'

const endPoint ='/listings'

export const getListings = () => apiClient.get(endPoint)
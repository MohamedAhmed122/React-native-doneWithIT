import {apiClient } from './client'

const endpoint ='/listings'

export const getListings = () => apiClient.get(endpoint)


export const AddListings = (listing, onUploadProgress) =>{

    const data = new FormData()

    data.append('title', listing.title)

    data.append('price', listing.price)

    data.append('description', listing.description)

    data.append('categoryId', listing.category.id)

    listing.images.forEach((image, index)=>
        data.append('images',{
            name: 'image '+ index,
            type: 'image/jpeg',
            uri: image
        })
    )
  
    if(listing.location)
    data.append('location', JSON.stringify(listing.location))

   return  apiClient.post(endpoint, data,{
       onUploadProgress : progress => 
       onUploadProgress(progress.loaded / rogress.total)
   })
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Contact} from '../models/contact.model'

export const contactsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }), // Set the baseUrl for every endpoint below
  tagTypes:['Contact'],
  endpoints: (builder) => ({
    contacts:builder.query<Contact[],void>(
      {
        query:(id)=>"/contacts",
        providesTags:["Contact"]
      }
    ),
    contact:builder.query<Contact,string>(
      {
        query:(id)=>`/contacts/${id}`,
        providesTags:["Contact"]
      }
    ),
    addContact:builder.mutation<{},Contact>(
      {
        query:(contact)=>({
          url:"/contacts",
          method:'POST',
          body:contact
        }),
        invalidatesTags:["Contact"]
      }
    ),
    deleteContact:builder.mutation<void,string>(
      {
        query:(id)=>({
          url:`/contacts/${id}`,
          method:'DELETE',
        
        }),
        invalidatesTags:["Contact"]
      }
    ),
    updateContact:builder.mutation<void,Contact>(
      {
        query:({id,...rest})=>({
          url:`/contacts/${id}`,
          method:'PUT',
          body:rest
        
        }),
        invalidatesTags:["Contact"]
      }
    ),
  }),
  
})

export const {useContactsQuery,useAddContactMutation,useDeleteContactMutation,useContactQuery,useUpdateContactMutation}=contactsApi
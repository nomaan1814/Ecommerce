import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const categoryService=createApi({
    reducerPath:'auth',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/category/",
        prepareHeaders:(headers,state)=>{
             const reducers=state.getState();
             const token=reducers?.authReducer?.adminToken;
             headers.set('authorization',token?`Bearer ${token}`:'');
             return headers;
        }
    }),
    endpoints:(builder)=>{
        return {
            create:builder.mutation({
                query:(name)=>{
                    return{
                        url:'create-category',
                        method:'POST',
                        body:name
                    }
                }
            })
        }
    }
})

export const {useCreateMutation}=categoryService;
export default categoryService;
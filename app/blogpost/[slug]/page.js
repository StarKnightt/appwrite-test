"use client"
import Navbar from '@/components/Navbar'
import BlogCard from "@/components/BlogCard";
import { Client, Databases, ID, Query } from "appwrite";
import React, { useState,useEffect } from 'react'

export default async function Page({ params }) {
    const [blog, setBlog] = useState()
    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
  
  const databases = new Databases(client);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID,
      [
        Query.equal('slug', params.slug)
      ]
    );

    promise.then(
      function (response) {
        console.log(response);
        setBlogs(response.documents[0])
      }, 
      function (error) {
        console.log(error);
      }
    );
  }, []);
    return (  
    <>
        <Navbar />
       <div>
          <div className="container mx-auto mt-8">
             <h1 className='text-3xl font-bold mb-6'>{blog?.title}</h1>
            <div className=''>
                {!blog && "Loading..."}
                <div className='text-sm font-blod italic'>Author: {blog?.author}</div>
                <div className="shadow-xl p-10" dangerouslySetInnerHTML={{__html: blog?.content}}></div>
            </div>
          </div>
       </div>
       </>
) 
}
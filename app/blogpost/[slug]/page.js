"use client"
import Navbar from '@/components/Navbar'
import { Client, Databases, Query } from "appwrite";
import React, { useState, useEffect } from 'react'

export default function Page({ params }) {
    const [blog, setBlog] = useState(null)
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
    
    const databases = new Databases(client);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await databases.listDocuments(
                    process.env.NEXT_PUBLIC_DATABASE_ID,
                    process.env.NEXT_PUBLIC_COLLECTION_ID,
                    [
                        Query.equal('slug', params.slug)
                    ]
                );
                
                if (response.documents.length > 0) {
                    setBlog(response.documents[0]);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [params.slug]);

    if (!blog) {
        return (
            <>
                <Navbar />
                <div className="container mx-auto mt-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
                        <div className="h-40 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8 px-4">
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-purple-800">{blog.title}</h1>
                    <div className="text-sm font-bold text-gray-600 mb-8">
                        Written by {blog.author}
                    </div>
                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                </article>
            </div>
        </>
    )
}
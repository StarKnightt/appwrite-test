"use client";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
  
  const databases = new Databases(client);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID,
      []
    );

    promise.then(
      function (response) {
        console.log(response);
        setBlogs(response.documents)
      }, 
      function (error) {
        console.log(error);
      }
    );
  }, []); // Empty dependency array means this runs once when component mounts

  function extractFirst100Chars(htmlStr) {
    // Create a temporary div to extract text from HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlStr;
  
    // Get the plain text content of the HTML
    const text = tempDiv.textContent || tempDiv.innerText;
  
    // Check if the text length exceeds 100 characters
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    } else {
      return text;
    }
  }
  
  // Example usage
  const htmlString = "<p>This is a <b>sample</b> HTML string that is longer than 100 characters to demonstrate the function.</p>";
  const result = extractFirst100Chars(htmlString);
  console.log(result);
  

  return (
    <>
      <Navbar />
      <div>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogCard 
              key={blog.$id} {...blog} 
              metadesc={extractFirst100Chars(blog.content)}
              title={blog.title}
              slug={blog.slug}
              author={blog.author}
            />
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </>
  );
}

"use client";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client();
  client.setProject("6762ca5c003465345596");
  const databases = new Databases(client);
  let a =[
    {
      "title": "Learn TypeScript",
      "content": "<h1>Learn TypeScript</h1><p>TypeScript is a powerful, typed superset of JavaScript that compiles to plain JavaScript. It offers great features for building scalable and maintainable applications.</p>",
      "slug": "learn-typescript",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Getting Started with React",
      "content": "<h1>Getting Started with React</h1><p>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state effectively.</p>",
      "slug": "getting-started-with-react",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Mastering Node.js",
      "content": "<h1>Mastering Node.js</h1><p>Node.js is a runtime that allows you to run JavaScript on the server. It's great for building scalable network applications.</p>",
      "slug": "mastering-nodejs",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "A Guide to Python Basics",
      "content": "<h1>A Guide to Python Basics</h1><p>Python is a versatile programming language known for its simplicity and readability. It's widely used in web development, data science, and automation.</p>",
      "slug": "guide-to-python-basics",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Understanding Databases",
      "content": "<h1>Understanding Databases</h1><p>Databases are essential for storing and retrieving data in applications. Learn the differences between SQL and NoSQL databases and their use cases.</p>",
      "slug": "understanding-databases",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Exploring CSS Flexbox",
      "content": "<h1>Exploring CSS Flexbox</h1><p>CSS Flexbox makes it easier to design flexible and responsive layouts. It's a must-know feature for web developers.</p>",
      "slug": "exploring-css-flexbox",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Building RESTful APIs",
      "content": "<h1>Building RESTful APIs</h1><p>RESTful APIs are the backbone of modern web applications. Learn how to design and implement them effectively.</p>",
      "slug": "building-restful-apis",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "JavaScript ES6 Features",
      "content": "<h1>JavaScript ES6 Features</h1><p>ES6 introduced many new features like arrow functions, template literals, and destructuring. These features make JavaScript development more efficient.</p>",
      "slug": "javascript-es6-features",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Introduction to Machine Learning",
      "content": "<h1>Introduction to Machine Learning</h1><p>Machine learning is a branch of AI that focuses on building systems that learn from data. Understand the basics of supervised and unsupervised learning.</p>",
      "slug": "introduction-to-machine-learning",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    },
    {
      "title": "Version Control with Git",
      "content": "<h1>Version Control with Git</h1><p>Git is a distributed version control system that helps developers manage code changes. Learn the basics of repositories, branches, and commits.</p>",
      "slug": "version-control-with-git",
      "views": 0,
      "author": "ChatGPT",
      "is_published": true
    }
  ]

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    
  const promise = databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ID,
    ID.unique(),
    element
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}
  return (
    <>
      <div>navbar here</div>
      <div>app here</div>
    </>
  );
}

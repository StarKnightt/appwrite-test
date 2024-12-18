import Link from 'next/link';

const BlogCard = ({ title, author, metadesc, slug }) => {
  return (
    <div className="bg-white rounded shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">{title}</h2>
      <p className="text-gray-800 mb-4">{metadesc}</p>
      <p className="text-gray-600 mb-4 text-sm font-bold">By {author}</p>
      <Link href={"/blogpost/" + slug} className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;

// components/BlogPost.jsx

export default function BlogPost({ date, title, summary }) {
    return (
      <div className="mb-8">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all hover:translate-y-[-5px] hover:scale-101 duration-300 ease-in-out">
          <div className="text-sm text-gray-400">{date}</div>
          <h2 className="text-2xl font-bold mt-2">{title}</h2>
          <p className="text-lg mt-2">{summary}</p>
        </div>
      </div>
    );
  }
  
import BlogPost from "../../components/BlogPost";

export default function WritingPage() {
  const posts = [
    {
      date: 'April 20, 2025',
      title: 'Exploring Ethics in the Digital Age',
      summary: 'In this post, I dive into the ethical dilemmas posed by emerging technologies, particularly AI and data privacy.',
    },
    {
      date: 'March 15, 2025',
      title: 'Philosophical Perspectives on AI',
      summary: 'A deep dive into the philosophical implications of artificial intelligence, examining questions of consciousness and morality.',
    },
    {
      date: 'February 10, 2025',
      title: 'The Intersection of Philosophy and Computer Science',
      summary: 'An exploration of how philosophy can inform and shape the future of computer science, particularly in the realm of AI and ethics.',
    },
    // Add more posts here as needed
  ];

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-4 bg-white text-gray-800 font-playfair">
      <div className="w-11/12 md:w-2/3 text-center">
        <h1 className="text-4xl font-semibold mb-6">My Writing</h1>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <BlogPost key={index} date={post.date} title={post.title} summary={post.summary} />
          ))}
        </div>
      </div>
    </main>
  );
}

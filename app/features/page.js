import Link from "next/link";

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-black mb-4">Features</h1>
        <p className="text-gray-700 m-4">
          Explore powerful features like secure login, persistent todos, and a clean user dashboard.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
      </div>
    </div>
  );
}

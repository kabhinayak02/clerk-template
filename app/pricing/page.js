import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-black mb-4">Pricing</h1>
        <p className="text-gray-700 m-4">Our platform is currently free during beta!</p>
        <Link href="/" className="text-blue-500 hover:underline mt-5">Home</Link>
      </div>
    </div>
  );
}

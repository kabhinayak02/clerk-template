import Link from "next/link";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-black mb-4">Contact Us</h1>
                <p className="text-gray-700 m-4">Feel free to reach out to us at abhinay.dev@gmail.com</p>
                <Link href="/dashboard" className="text-blue-500 hover:underline mt-5">Go to Dashboard</Link>
            </div>
        </div>
    );
}

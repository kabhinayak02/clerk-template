import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Settings() {
    const { userId } = await auth();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-8">
            <div className="bg-gray-100 p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <div className="bg-gray-50 p-6 rounded-lg text-gray-600">
                        <h1 className="text-2xl font-bold text-black mb-4">Settings</h1>
                        <p className="text-gray-700">You are logged in as <strong>{userId}</strong></p>
                        <p className="text-gray-700 mt-2">Account settings and preferences coming soon.</p>
                    </div>
                    <Link href="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
                </div>
            </div>
        </div>
    );
}

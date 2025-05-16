import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Profile() {
    const user = await currentUser();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-8">
            <div className="bg-gray-100 p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <div className="bg-gray-50 p-6 rounded-lg text-gray-600">
                        <h1 className="text-2xl font-bold text-black mb-4">Profile</h1>
                        <p className="text-gray-700"><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
                        <p className="text-gray-700"><strong>Email:</strong> {user?.emailAddresses[0].emailAddress}</p>
                    </div>
                    <Link href="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
                </div>
            </div>
        </div>
    );
}

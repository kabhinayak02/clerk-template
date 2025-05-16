"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default function DashboardClient({ userId, firstName, lastName, email }) {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Dashboard Section */}
            <div className="bg-gray-100 p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
                        <div className="flex items-center gap-4">
                            <UserButton />
                            <Link href="/" className="text-blue-500 hover:underline">Home</Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg text-gray-600">
                        <h2 className="text-xl font-semibold mb-4">Protected Dashboard</h2>
                        <p className="mb-4">This page is protected and only accessible to authenticated users.</p>
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Your Profile:</h3>
                            <p><strong>Name:</strong> {firstName} {lastName}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>User ID:</strong> {userId}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/profile" className="text-blue-500 hover:underline">Profile</Link>
                        <Link href="/settings" className="text-blue-500 hover:underline">Settings</Link>
                        <Link href="/contact-us" className="text-blue-500 hover:underline">Contact us</Link>
                    </div>

                </div>
            </div>

            {/* App */}
            <div className="bg-gray-100 p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-black mb-4">Our Premium App</h1>
                    <p className="text-gray-800">All the premium feature</p>
                    <div>
                        {/* user: {JSON.stringify(user)} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

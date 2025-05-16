
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();

  console.log("user++++:", user);
  console.log("userId-----:", userId);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">Next.js Clerk Auth</h1>
          {userId ? (
            <UserButton />
          ) : (
            <div className="space-x-4">
              <Link href="/sign-in" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Sign Inn
              </Link>
              <Link href="/sign-up" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Sign Upp
              </Link>
            </div>
          )}
        </div>

        {userId ? (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome, {user.firstName || "User"}!</h2>
            <p className="mb-4 text-gray-600">You are currently signed in.</p>
            <div className="bg-white p-4 rounded border mb-4 text-gray-600">
              <h3 className="font-medium mb-2">Your Account Information:</h3>
              <p><strong>Email:</strong> {user.emailAddresses[0].emailAddress}</p>
              <p><strong>User ID:</strong> {userId}</p>
            </div>
            <div className="flex flex-col">
              <Link href="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
              <Link href="/features" className="text-blue-500 hover:underline">Features</Link>
              <Link href="/pricing" className="text-blue-500 hover:underline">Pricing</Link>
              <Link href="/about-us" className="text-blue-500 hover:underline">About us</Link>
            </div>
          </div>

        ) : (
          <div>
            <div className="bg-gray-50 p-6 rounded-lg text-gray-600">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome to our Auth Demo</h2>
              <p className="mb-4">Please sign in or sign up to continue.</p>
              <p>This application demonstrates authentication with Google and Microsoft providers using Clerk.</p>
            </div>
            <div className="flex flex-col">
              <Link href="/features" className="text-blue-500 hover:underline">Features</Link>
              <Link href="/pricing" className="text-blue-500 hover:underline">Pricing</Link>
              <Link href="/about-us" className="text-blue-500 hover:underline">About us</Link>
            </div>

          </div>

        )}

      </div>

    </main>
  );
}
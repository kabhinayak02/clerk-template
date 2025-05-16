// import { auth } from "@clerk/nextjs";
// import { getUserFromDatabase } from "../../../lib/user";

// export async function GET() {
//     const { userId } = auth();

//     if (!userId) {
//         return new Response(JSON.stringify({ error: "Unauthorized" }), {
//             status: 401,
//             headers: { "Content-Type": "application/json" },
//         });
//     }

//     const dbUser = await getUserFromDatabase(userId);

//     if (!dbUser) {
//         return new Response(JSON.stringify({ error: "User not found" }), {
//             status: 404,
//             headers: { "Content-Type": "application/json" },
//         });
//     }

//     return Response.json({ user: dbUser });
// }
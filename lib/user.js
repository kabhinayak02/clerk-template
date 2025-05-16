// import prisma from "./prisma";

// export async function saveUserToDatabase(user) {
//     if (!user || !user.id) return null;

//     try {
//         // Check if user already exists
//         const existingUser = await prisma.user.findUnique({
//             where: { clerkUserId: user.id },
//         });

//         if (existingUser) {
//             // Update existing user
//             return await prisma.user.update({
//                 where: { clerkUserId: user.id },
//                 data: {
//                     email: user.emailAddresses[0].emailAddress,
//                     firstName: user.firstName || null,
//                     lastName: user.lastName || null,
//                     imageUrl: user.imageUrl || null,
//                 },
//             });
//         } else {
//             // Create new user
//             return await prisma.user.create({
//                 data: {
//                     clerkUserId: user.id,
//                     email: user.emailAddresses[0].emailAddress,
//                     firstName: user.firstName || null,
//                     lastName: user.lastName || null,
//                     imageUrl: user.imageUrl || null,
//                 },
//             });
//         }
//     } catch (error) {
//         console.error("Error saving user to database:", error);
//         return null;
//     }
// }

// export async function getUserFromDatabase(user) {
//     const clerkUserId = user.id;
//     if (!clerkUserId) return null;

//     try {
//         return await prisma.user.findUnique({
//             where: { clerkUserId },
//         });
//     } catch (error) {
//         console.error("Error fetching user from database:", error);
//         return null;
//     }
// }
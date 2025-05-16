import { headers } from "next/headers";
// import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import prisma from "../../../../lib/prisma";

export async function POST(req) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error(
            "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
        );
    }

    // Get the webhook signature from the header
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // console.log("headerPayload", headerPayload) // return promise // so use await 

    // If there is no signature, return 400
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Missing svix headers", { status: 400 });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your webhook secret
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;

    // Verify the webhook
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error verifying webhook", { status: 400 });
    }

    const eventType = evt.type;

    // Handle user creation
    if (eventType === "user.created") {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data;

        const primaryEmail = email_addresses.find(email => email.id === evt.data.primary_email_address_id);

        if (id && primaryEmail) {
            try {
                await prisma.user.create({
                    data: {
                        clerkUserId: id,
                        email: primaryEmail.email_address,
                        firstName: first_name || null,
                        lastName: last_name || null,
                        imageUrl: image_url || null,
                    },
                });
            } catch (error) {
                console.error("Error creating user in database:", error);
                return new Response("Error creating user", { status: 500 });
            }
        }
    }

    // Handle user updates
    if (eventType === "user.updated") {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data;

        const primaryEmail = email_addresses.find(email => email.id === evt.data.primary_email_address_id);

        if (id && primaryEmail) {
            try {
                await prisma.user.update({
                    where: { clerkUserId: id },
                    data: {
                        email: primaryEmail.email_address,
                        firstName: first_name || null,
                        lastName: last_name || null,
                        imageUrl: image_url || null,
                    },
                });
            } catch (error) {
                console.error("Error updating user in database:", error);
                return new Response("Error updating user", { status: 500 });
            }
        }
    }

    // Handle user deletion
    if (eventType === "user.deleted") {
        const { id } = evt.data;

        if (id) {
            try {
                await prisma.user.delete({
                    where: { clerkUserId: id },
                });
            } catch (error) {
                console.error("Error deleting user from database:", error);
                return new Response("Error deleting user", { status: 500 });
            }
        }
    }

    return new Response("Webhook processed successfully", { status: 200 });
}
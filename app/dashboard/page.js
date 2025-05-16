import { auth, currentUser } from "@clerk/nextjs/server";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <DashboardClient
      userId={userId}
      firstName={user?.firstName || ""}
      lastName={user?.lastName || ""}
      email={user?.emailAddresses?.[0]?.emailAddress || ""}
    />
  );
}

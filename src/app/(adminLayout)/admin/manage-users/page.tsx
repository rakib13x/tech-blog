import DashboardTitle from "@/components/dashboard-title";
import UsersTable from "@/components/users-table";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Users | Admin Dashboard",
};

interface IProps {}

const ManageUsersPage = async ({}: IProps) => {
  return (
    <div>
      <DashboardTitle title="Manage Users" />
      <UsersTable />
    </div>
  );
};

export default ManageUsersPage;

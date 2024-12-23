import DashboardTitle from "@/components/dashboard-title";
import SubscribersTable from "@/components/subscribers-table";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Subscribers | Admin Dashboard",
};

interface IProps {}

const SubscribersPage = ({}: IProps) => {
  return (
    <div>
      <DashboardTitle title="All Subscribers" />
      <SubscribersTable />
    </div>
  );
};

export default SubscribersPage;

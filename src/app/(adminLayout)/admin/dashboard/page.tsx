import DashboardTitle from "@/components/dashboard-title";
import DashboardContent from "@/components/modules/admin/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

interface IProps {}

const AdminDashboard: React.FC<IProps> = () => {
  return (
    <div>
      <DashboardTitle title="Dashboard" />
      <DashboardContent />
    </div>
  );
};

export default AdminDashboard;

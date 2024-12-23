import NavarDropdown from "@/components/ui/navbar-dropdown";
import AdminSidebar from "@/components/shared/admin-sidebar";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row">
        <>
          <AdminSidebar />
        </>

        <div className="pt-20 px-2 pb-2 lg:p-6 flex-1">
          <div className="hidden lg:justify-end lg:flex">
            <NavarDropdown />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;

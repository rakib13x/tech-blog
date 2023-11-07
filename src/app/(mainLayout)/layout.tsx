import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

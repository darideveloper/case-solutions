import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";
import { fontRegular } from "@/lib/fonts";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`${fontRegular.className} ${className}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

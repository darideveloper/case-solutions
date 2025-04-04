import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";
import { fontRegular } from "@/lib/fonts";
import Head from "next/head";


const metadata = {
  author: "Case Solutions, Dari Devs Team",
  keywords: "software Mexico, consultoría tecnológica México, soluciones de negocio México, productividad empresarial, administración de recursos, software a medida, consultoría IT México, desarrollo de software México, servicios tecnológicos México, Dari Devs Team"
}
export default function Layout({ children, className = "" }) {
  return (
    <div className={`${fontRegular.className} ${className}`}>
      <Head>
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface Props {
  children?: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

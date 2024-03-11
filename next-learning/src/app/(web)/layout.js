import Footer from "../_lib/components/Footer/Footer";
import Header from "../_lib/components/Header/Header";

export default function WebLayout({ children }) {
    return (
      <>
          <Header />
          {children}
          <Footer />
      </>
    )
  }
  
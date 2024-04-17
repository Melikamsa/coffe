import "../styles/globals.css";
import Header from "../components/header/page";
import Footer from "../components/footer/index";
// import HamburgerMenu from "../components/hamburgerMenu/index"

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="capitalize">
        <Header />
        {/* <HamburgerMenu/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

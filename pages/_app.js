import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

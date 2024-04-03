import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <script dangerouslySetInnerHTML={{__html:`(function (w, d, s, o, f, js, fjs) { w[o] = w[o] || function () { (w[o].q =
          w[o].q || []).push(arguments); }; (js = d.createElement(s)), (fjs =
          d.getElementsByTagName(s)[0]); js.id = o; js.src = f; js.async = 1;
          fjs.parentNode.insertBefore(js, fjs); })(window, document, "script", "_cvt",
          "https://cdn.convrrt.com/libs/popup/widget.js");
          _cvt("init", {
            orgID: 'mailmodo',
            projectID: "0004ede9-b0b1-55d5-b0b2-819243f1c0ea_f5ad2069-61cf-4503-8b70-7e7b6eae5812",
            popupID: "a75a0fac-5086-4430-8d18-44924a215a73"
          });`}}>
        {}
      </script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

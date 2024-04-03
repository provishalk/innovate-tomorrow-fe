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
            projectID: "454c576f-a04e-58de-9398-73752ddaf021_52cd5ece-4705-465a-8e1f-666f1832eb45",
            popupID: "dc2134ed-9e50-4f3a-8129-f5102074bd5c"
          });`}}>
        {}
      </script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

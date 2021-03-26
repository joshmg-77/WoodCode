import Navbar from "./Head/Navbar";

import { lazy, Suspense } from "react";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import CodeEditor from "./CodeEditor/index";

const Footer = lazy(() => import("./footer/footer"));
const Logo = lazy(() => import("./LogoHeader/Logo"));

function App() {
  return (
    <>
      <Suspense fallback="">
        <Logo />
      </Suspense>
      <Navbar />
      <CodeEditor />
      <Suspense fallback="loading">
        <Footer />
      </Suspense>
    </>
  );
}
export default App;

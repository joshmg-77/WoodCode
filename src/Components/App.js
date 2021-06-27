import { lazy, Suspense } from 'react';

const Footer = lazy(() => import('./footer/index'));
const Logo = lazy(() => import('./LogoHeader/Logo'));
const Navbar = lazy(() => import('./Header/index'));
import CodeEditor from './CodeEditor/index';

function App() {
  return (
    <>
      <Suspense fallback='LOADING......'>
        <Logo />
        <Navbar />
      </Suspense>
      <CodeEditor />
      <Suspense fallback='loading'>
        <Footer />
      </Suspense>
    </>
  );
}
export default App;

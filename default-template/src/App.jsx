
// Dependencies
import { createSignal, onMount, lazy, createEffect } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router"

// Functionality
import Cookies from '../Functions/Cookies';
import Redirecting from '../Functions/Redirecting';
import GenerateStyle from '../Functions/GenerateStyle';

// Components
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

// Pages - Eager loaded
import HomePage from '../Pages/HomePage';


// Pages - Lazy loaded
const CookiesPage = lazy(() => import('../Pages/CookiesPage'));
const Page404 = lazy(() => import('../Pages/page404'));


// TODO: Change this to your own IDs
const cookiesLocation = "COOKIES-BESAMEL-DOCS";
const googleID = ""
const clarityID = ""



function App() {

  // * Cookies - if not used - delete this section and: the cookes page, the cookies function.
  // ? If you think, that you can optimise this - you can't. This is the best way to do it.
  const [analyticalCookiesAllowed, setAnalyticalCookiesAllowed] = createSignal(null);
  function setCookies(type, value) {
    let c = JSON.parse(localStorage.getItem(cookiesLocation));
    c[type] = value;
    if (type === "analytical") {
      setAnalyticalCookiesAllowed(value);
    } else { }
    localStorage.setItem(cookiesLocation, JSON.stringify(c));
  }
  onMount(() => {
    try {
      let c = JSON.parse(localStorage.getItem(cookiesLocation));
      setAnalyticalCookiesAllowed(c["analytical"]);
    } catch (e) {
      localStorage.setItem(cookiesLocation, JSON.stringify({ "analytical": undefined }));
      setAnalyticalCookiesAllowed(undefined);
    }
  })





  return (
    <>

      <GenerateStyle />
      <Router  >
        <Redirecting />
        <NavBar />
        <div className="main">
          <Routes >
            <Route path="/" element={<HomePage />} />



            <Route path="/cookies" element={<CookiesPage setCookies={setCookies} analyticalCookiesAllowed={analyticalCookiesAllowed} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>

        </div>
        <Footer />

        <Cookies cookiesAllowed={analyticalCookiesAllowed} setCookies={setCookies} googleID={googleID} clarityID={clarityID} />
      </Router>


    </>
  );
}

export default App;

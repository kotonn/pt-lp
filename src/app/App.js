import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Bars } from 'react-loader-spinner'

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 2000);
  }, []);

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      easing: 'ease-out-sine',
    });
  }, []);

  if (loading) {
    return (
      <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
        <Bars
          height="50"
          width="50"
          color="#ffb800"
          ariaLabel="bars-loading"
          wrapperClass="loader_spinner"
          visible={true}
        />
      </div>
    );
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

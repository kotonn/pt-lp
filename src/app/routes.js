import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Usage } from "../pages/usage";
import { ContactUs } from "../pages/contact";
import { Subscription } from "../pages/subscription";
import { Socialicons } from "../components/socialicons";
import { TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <Routes location={location}>
      <Route exact path="/" element={<Home />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/usage" element={<Usage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;

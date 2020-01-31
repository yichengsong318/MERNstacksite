import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/landing-page/landing-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import AboutPage from "./pages/about-page/about-page.component";
// import RegisterPage from "./pages/register-page/register-page.component";
import DashboardPage from "./pages/dashboard-page/dashboard-page.component";
import HomePage from "./pages/home-page/home-page.component";
import GalleryPage from "./pages/gallery-page/gallery-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

import ServicesPage from "./pages/services-page/services-page.component";
import Header from "./components/header/header.component";
import Footer from "./components/common/footer/footer.component";

import PrivateRoute from "./components/common/private-route/private-route-component";

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: "white" }}>
      <Header />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/register" component={RegisterPage} /> */}
      </Switch>
      {/* for local */}
      {/* <Route exact path="/dashboard" component={DashboardPage} /> */}

      {/* for heroku */}
      <Switch>
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "../components/header";
import HomeContent from "../components/HomeContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function HomePage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <HomeContent />
      </main>
    </div>
  );
}
export default HomePage;

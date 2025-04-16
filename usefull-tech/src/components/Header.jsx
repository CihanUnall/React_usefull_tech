import React from "react";
import videoBg from "../assets/Ford-Mustang-GT500.mp4";

function Header() {
  return (
    <>
      <section className="videoContainer">
        <header>
          <video className="video-bg" autoPlay loop muted>
            <source src={videoBg} type="video/mp4" />
          </video>
        </header>
        <section className="videoitem">
          <h1>Willkommen!</h1>
          <h3>Viel Spaß bei diesem kleinen Knobelprojekt!</h3>
        </section>
      </section>
    </>
  );
}

export default Header;

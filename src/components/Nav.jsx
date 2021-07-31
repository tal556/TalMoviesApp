import React, { useEffect, useState } from "react";
import "../style/Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* <img className="nav_logo" src="" alt="logo" /> */}
      {/* <h1>TalDb</h1> */}
      <img src="/logo.svg" alt="" />
    </div>
  );
}

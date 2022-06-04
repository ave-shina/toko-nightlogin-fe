import React from "react";

// Import Navbar Component from Navbar.js
import Navbar from "./Navbar";
// Import Global Style Component From Style Folder
import { GlobalStyle } from "../../styles/GlobalStyle";

// Children in this function component means that when this function component is called as a tag
//  the children inside the tag will send to the function component
export default function Layout({ children }) {
  return (
    <main>
      {/* Calling Global Style */}
      <GlobalStyle></GlobalStyle>
      {/* Calling Global Style */}
      <Navbar></Navbar>
      {/* children is the content inside tag */}
      {children}
    </main>
  );
}

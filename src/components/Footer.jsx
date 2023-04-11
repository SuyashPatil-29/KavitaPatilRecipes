import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterComponent>
      <div className=" w-full h-48 flex justify-center gap-44 items-center text-slate-200 bg-slate-900">
        <p className="">© {new Date().getFullYear()} Kavita Patil. All rights reserved.</p>
        <ul className=" flex gap-4">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </FooterComponent>
  );
}

const FooterComponent =styled.div`
`


export default Footer;
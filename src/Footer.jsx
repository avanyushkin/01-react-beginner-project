import {useState} from 'react'
import './Footer.css'
import reactLogo from '/react-1.svg'

function Footer() {
  return (
    <img
      src={reactLogo}
      alt="Press to rotate"
      className="rotating-image"
    />
  );
}

export default Footer;
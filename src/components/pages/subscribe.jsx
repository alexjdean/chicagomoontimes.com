import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Form from "../Form"

const Subscribe = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1500px)' })

  let textStyle = null;

  if(isTabletOrMobile) {
    textStyle = {
      textAlign: "left",
      padding: "2.5% 5%",
      paddingBottom: "2%",
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "4.75rem",
      fontWeight: "normal",
      color: "white"
    };
  } else if(isDesktop) {
    textStyle = {
      textAlign: "left",
      padding: "2.5% 30%",
      paddingBottom: "0.5%",
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "1.75rem",
      fontWeight: "normal",
      color: "white"
    };
  } else {
    textStyle = {
      textAlign: "left",
      padding: "2.5% 20%",
      paddingBottom: "1%",
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "1.75rem",
      fontWeight: "normal",
      color: "white"
    };
  }


  return (
    <div
      style={{
        background: '#303030',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        height: '84vh',
        color: '#fff'
      }}
    >
      <p style={textStyle}>Subscribe so you never miss an article from the Chicago Moon-Times! Subscribing is free. :)</p>
      
      <Form />
    </div>
  );
};

export default Subscribe;
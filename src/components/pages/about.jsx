import React from 'react';
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1500px)' })

  let textStyle = null;

  if(isTabletOrMobile) {
    textStyle = {
      textAlign: "left",
      padding: "2.5% 5%",
      paddingBottom: "2%",
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "1.75rem",
      fontWeight: "normal"
    };
  } else if(isDesktop) {
    textStyle = {
      textAlign: "left",
      padding: "2.5% 30%",
      paddingBottom: "0.5%",
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "1.75rem",
      fontWeight: "normal"
    };
  } else {
    textStyle = {
      textAlign: "left",
      padding: "2.5% 20%",
      paddingBottom: "1%",
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "1.75rem",
      fontWeight: "normal"
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
      <p style={textStyle}>You've heard of the Chicago Sun-Times. But after sunset, that's when we come in. The Chicago Moon-Times is the premier news source for the Chicagoland area for all events that happen AFTER dark. We know what's up.</p>
      
      <p style={textStyle}>In all seriousness, the Moon-Times was created in April 2022 by a very bored computer programmer on a Saturday night. Everything on the site is satire. Please don't sue me!</p>
    </div>
  );
};

export default About;
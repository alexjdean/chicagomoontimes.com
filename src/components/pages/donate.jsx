import React from 'react';
import { useMediaQuery } from 'react-responsive'

const Donate = () => {
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
      <p style={textStyle}>The Chicago Moon-Times has a world-class team of volunteer <del>reporters</del> <em>reporter</em> investigating every beat in the city. You hear something? We're likely already on it.</p>

      <p style={textStyle}>If you'd like to support the Moon-Times, <a href='https://www.buymeacoffee.com/moontimes'>you can do so here!</a></p>
    </div>
  );
};

export default Donate;
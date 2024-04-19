import React from 'react';
import "./Title.css";

const Title = () => {
  return (
    <>
    <svg viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#D8D9DA"/> {/* Grey color for the wave */}
        </linearGradient>
        <pattern id="wave" x="0" y="6" width="10%" height="100%" patternUnits="userSpaceOnUse">
          <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
            <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1.5s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite" />
          </path>
        </pattern>
      </defs>
      <text textAnchor="middle" x="50%" y="25" fontSize="24" fontFamily="Lilita One" fill="#000000" stroke="black" strokeWidth="0.2">🎵 THE VOICE NOTES</text>
      <text textAnchor="middle" x="50%" y="25" fontSize="24" fontFamily="Lilita One" fill="url(#wave)" fillOpacity="1" stroke="black" strokeWidth="0.2">🎵 THE VOICE NOTES</text>
      
    </svg>
   
    </>
    
  );
};

export default Title;

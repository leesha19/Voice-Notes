import React from "react";
import PropTypes from "prop-types";

const CurvedText = ({ children, width, height, radius, dy }) => {
  const fontSize = (width / 1.5).toString() + "px";
  const transform = `translate(${width / 2}, ${height / 2})`;

  return (
    <svg width={width} height={height}>
      <path
        d={`M 0,${radius} A ${radius},${radius} 0 0 1 ${radius},${radius}`}
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      />
      <g transform={transform}>
        <text
           x={width / 2}
          textAnchor="middle"
          y={height / 2 - radius - fontSize / 2}
          dy={dy}
          fontSize={fontSize}
          fontFamily="Verdana"
        >
          {children}
        </text>
      </g>
    </svg>
  );
};

CurvedText.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  dy: PropTypes.number.isRequired,
};

export default CurvedText;
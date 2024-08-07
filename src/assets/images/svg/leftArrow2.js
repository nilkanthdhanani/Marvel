import React from "react";

const LeftArrow2 = () => (
    <svg viewBox="10 0 50 110" width="50px"><filter id="dropShadow1"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="shadowBlur"></feGaussianBlur><feOffset dx="0" dy="0"></feOffset><feColorMatrix result="shadowBlur" id="svgcolormatrix" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .4 0"></feColorMatrix></filter><polygon points="0 0 0 110 50 85 50 25" filter="url(#dropShadow2)"></polygon><polygon points="0 0 0 110 50 85 50 25"></polygon><path d="M40 35 L20 55 L40 75" class="arrow"></path></svg>
)

export default LeftArrow2;
import React from "react";

const RightArrow2 = () => (
    <svg viewBox="0 0 50 110" width="50px">
        <defs><filter id="dropShadow2" name="dropShadow2"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="shadowBlur"></feGaussianBlur><feOffset></feOffset><feColorMatrix result="shadowBlur" id="svgcolormatrix" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.4 0"></feColorMatrix></filter></defs>
        <polygon points="10 25 10 85 60 110 60 0 10 25" filter="url(#dropShadow2)"></polygon>
        <polygon points="10 25 10 85 60 110 60 0 10 25"></polygon>
        <path d="M20,75,40,55,20,35" class="arrow"></path>
    </svg>
)

export default RightArrow2;
import React from "react";

const SpeechBubble = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 25"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-45 -170)">
          <path fill="#FFF" d="M0 0H1200V800H0z"></path>
          <path fill="#F1F3F4" d="M0 40H1200V268H0z"></path>
          <g fill="#000" fillRule="nonzero" transform="translate(45 170)">
            <g>
              <path d="M21.968 1.622c.823 0 1.468.644 1.468 1.467v14.073c0 .374-.169.76-.462 1.056a1.499 1.499 0 01-1.063.47h-7.58l-.434.327-4.438 3.349V18.687H3.146a1.51 1.51 0 01-1.07-.454 1.51 1.51 0 01-.454-1.07V3.088c0-.809.684-1.467 1.524-1.467h18.822m0-1.622H3.146C1.43 0 0 1.373 0 3.09v14.072c0 1.717 1.43 3.147 3.146 3.147h4.692v4.119c0 .343.286.572.629.572.114 0 .343-.114.343-.114l6.064-4.577h7.037c1.716 0 3.146-1.487 3.146-3.147V3.09A3.076 3.076 0 0021.968 0z"></path>
              <path d="M18.382 8.524H6.675a.44.44 0 01-.44-.44V7.42a.44.44 0 01.44-.44h11.707a.44.44 0 01.44.44v.666a.44.44 0 01-.44.439zM13.691 13.272H6.675a.44.44 0 01-.44-.439v-.666a.44.44 0 01.44-.44h7.016a.44.44 0 01.44.44v.666a.44.44 0 01-.44.44z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SpeechBubble;
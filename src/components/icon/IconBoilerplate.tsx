import * as React from "react";
const SVGComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 21000 29700"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <style type="text/css" />
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <g id="_2738963153648">
        <path
          className="fil0"
          d="M13603 15260l1340 801c470,281 625,895 344,1364l0 0c-280,470 -894,625 -1364,344l-2261 -1350 1941 -1159z"
        />
        <path
          className="fil1"
          d="M9419 12762l2243 1340 -3267 1951c-293,175 -463,480 -482,799l0 -3231c0,-80 10,-158 28,-232 22,-98 60,-193 114,-283l0 0c281,-470 894,-625 1364,-344z"
        />
        <path
          className="fil2"
          d="M9416 17761l5469 -3267c161,-82 301,-208 400,-374l0 0c129,-216 166,-462 123,-692 -21,-114 -62,-226 -124,-331l0 0c-94,-157 -226,-279 -377,-361l-5490 -3280c-470,-280 -1084,-125 -1364,344l0 0c-281,470 -126,1084 344,1365l4091 2443 -4093 2445c-469,281 -624,894 -344,1364l0 0c281,470 895,625 1365,344z"
        />
      </g>
    </g>
  </svg>
);
export default SVGComponent;

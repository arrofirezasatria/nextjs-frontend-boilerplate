import * as React from "react";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="210mm"
    height="297mm"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "auto",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 21000 29700"
    {...props}
  >
    <path
      d="m13603 15260 1340 801c470 281 625 895 344 1364-280 470-894 625-1364 344l-2261-1350 1941-1159z"
      style={{
        fill: "#fff9ec",
      }}
    />
    <path
      d="m9419 12762 2243 1340-3267 1951c-293 175-463 480-482 799v-3231c0-80 10-158 28-232 22-98 60-193 114-283 281-470 894-625 1364-344z"
      style={{
        fill: "#2591b7",
      }}
    />
    <path
      d="m9416 17761 5469-3267c161-82 301-208 400-374 129-216 166-462 123-692-21-114-62-226-124-331-94-157-226-279-377-361L9417 9456c-470-280-1084-125-1364 344-281 470-126 1084 344 1365l4091 2443-4093 2445c-469 281-624 894-344 1364 281 470 895 625 1365 344z"
      style={{
        fill: "#154c79",
      }}
    />
  </svg>
);

export default SvgComponent;

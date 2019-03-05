import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

function Barcode({ value, renderer = "svg", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (value) new JsBarcode(ref.current, value, props);
  }, [value]);

  if (renderer === "svg") {
    return <svg ref={ref} />;
  } else if (renderer === "canvas") {
    return <canvas ref={ref} />;
  } else if (renderer === "img") {
    return <img ref={ref} />;
  }
}

export default Barcode;

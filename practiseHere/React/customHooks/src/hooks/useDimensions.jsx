import { useEffect, useState } from "react";

function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resizeListener = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return dimensions;
}

export default useDimensions;

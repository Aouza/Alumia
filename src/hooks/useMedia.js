import { useEffect, useState } from "react";

const useMedia = (media) => {
  const [resizeValue, setResizeValue] = useState(null);

  useEffect(() => {
    const windowResize = () => {
      const { matches } = window.matchMedia(media);
      setResizeValue(matches);
    };

    windowResize();

    window.addEventListener("resize", windowResize);
  }, [media]);

  return resizeValue;
};

export default useMedia;

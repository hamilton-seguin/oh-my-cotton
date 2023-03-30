import { useState, useEffect } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsDesktop(!/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  return isDesktop;
};

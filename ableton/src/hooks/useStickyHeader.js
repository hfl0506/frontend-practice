import { useState, useEffect, useCallback } from "react";

function useStickyHeader() {
  const [isSticky, setIsSticky] = useState(false);

  const toggleSticky = useCallback(() => {
    const scrollTop = window.scrollY;
    scrollTop >= 80 ? setIsSticky(true) : setIsSticky(false);
  }, [isSticky]);

  useEffect(() => {
    window.addEventListener("scroll", toggleSticky);
    return () => {
      window.removeEventListener("scroll", toggleSticky);
    };
  });

  return isSticky;
}

export default useStickyHeader;

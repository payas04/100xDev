import { useEffect, useState } from "react";

function useIsOnline() {
  const [isOnline, setIsonline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsonline(true));
    window.addEventListener("offline", () => setIsonline(false));
  }, []);
  return isOnline;
}
export default useIsOnline;

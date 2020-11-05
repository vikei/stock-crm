import {useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../utils/fake-history";

export default function useFakeLocation(url: string) {
  useEffect(() => {
    goToFakeLocation(url);

    return () => {
      goBackFromFakeLocation();
    };
  }, [url]);
}

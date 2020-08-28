import { useEffect } from "react";
import { useRouter } from "next/router";
import requestAuthTokesFromSpotify from "../services/requestAuthTokesFromSpotify";
import requestAuthCodeFromAPI from "../services/requestAuthCodeFromAPI";
import manageLocalStorage from "../services/manageLocalStorage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const asyncCall = async () => {
      if (router.query.code) {
        const { authCode } = await requestAuthCodeFromAPI();
        const data = await requestAuthTokesFromSpotify(
          router.query.code,
          authCode
        );

        if (data.error) {
          router.push({
            pathname: "/",
            query: { error: true },
          });
        } else {
          manageLocalStorage.setItem("tokens", data);
          router.push("/logged");
        }
      }
    };
    asyncCall();
  }, [router]);

  return <></>;
}

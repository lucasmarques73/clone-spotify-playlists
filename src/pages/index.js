import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Error from "../components/Error";

export default function Home() {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (router.query.error) {
      setHasError(true);
    }
  }, [router]);

  return (
    <>
      {hasError ? <Error /> : null}
      <main className="layout">
        <section className="container">
          <p className="text">Clone playlists públicas para você!!</p>
          <a className="button" href="/api/spotify/login">
            <span>Login com Spotify</span>
            <img className="logo" src="/spotify.png" />
          </a>
        </section>
      </main>
    </>
  );
}

"use client";

import ThemeImage from "@/components/theme-image";

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <ThemeImage
          srcDark="/logo/elementaru-logo-dark.svg"
          srcLight="/logo/elementaru-logo-light.svg"
          alt="Next.js Logo"
          width={500}
          height={66}
          priority={true}
        />
        <a className="m-8" href="mailto:laurynas@elementaru.com">
          laurynas@elementaru.com
        </a>
        <a className="" href="tel:+370 622 68868">
          +370 622 68868
        </a>
      </div>
    </main>
  );
}

export default Home;

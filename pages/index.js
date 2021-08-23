import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 bg-[#2f3738]">
      <Head>
        <title>In Memory of Phyllis Hartman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen lg:relative">
          <div className="relative w-full h-[56vh] lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/5 lg:h-screen">
            <Image
              className="absolute inset-0 object-cover object-top w-full h-full"
              src="/phartman--01.jpg"
              alt="Picture of Phyllis Marie Hartman"
              layout="fill"
              priority="true"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start w-full pt-16 pb-20 mx-auto text-center bg-[#2f3738] lg:h-screen">
            <div className="px-4 lg:w-2/5 sm:px-8 xl:pr-16">
              <header className="text-center">
                <h1>
                  <span className="block font-fancy text-[3rem] lg:text-[4rem] leading-none">
                    In loving memory of
                  </span>
                  <span className="block">Phyllis Marie Hartman</span>
                </h1>
                <p>1932 — 2021</p>
              </header>
              <div>
                <h2>Download Obituary</h2>
                <h2>Watch Video Memorial Slideshow</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

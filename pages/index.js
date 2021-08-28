import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 bg-[#1e2829]">
      <Head>
        <title>In Memory of Phyllis Hartman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen">
        <section>
          <div className="relative w-full h-[56vh] md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-screen">
            <Image
              className="absolute inset-0 z-10 object-cover object-top w-full h-full"
              src="/phartman--01.jpg"
              alt="Picture of Phyllis Marie Hartman"
              layout="fill"
              priority="true"
            />
          </div>
          <div className="relative flex items-center justify-center md:static md:justify-start w-full mx-auto text-center bg-[#1e2829] md:h-screen">
            <div className="relative z-10 px-4 py-24 overflow-hidden md:w-1/2 sm:px-8">
              <header className="text-center">
                <h1>
                  <span className="block tracking-[4px] uppercase lg:text-xl">
                    In loving memory of
                  </span>
                  <span className="block mt-4 font-serif text-5xl font-bold md:text-5xl lg:text-[4rem]">
                    Phyllis Marie <br /> Hartman
                  </span>
                </h1>
                <p className="mt-4 font-serif text-3xl lg:text-4xl">
                  1932–2021
                </p>
              </header>
              <div className="w-full mx-auto mt-8">
                <Image
                  width="140px"
                  height="22px"
                  src="/floral-divider_1@2x.png"
                  alt="floral divider"
                />
              </div>
              <div className="max-w-md p-4 mx-auto mt-2 space-y-6">
                <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
                  <p className="sm:text-lg lg:text-lg">Obituary Card</p>
                  <p className="flex-shrink-0 sm:pl-8">
                    <a
                      href="https://www.dropbox.com/s/iys5vvsxst8euon/2021-08-23--pHartman--obituaryCard.pdf?dl=1"
                      download="true"
                      className="inline-flex px-4 py-2 pb-1 text-sm tracking-[2px] uppercase border-2 border-opacity-30 hover:border-opacity-100 transition-all font-bold"
                    >
                      Download
                    </a>
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
                  <p className="sm:text-lg lg:text-lg">Remembrance Video</p>
                  <p className="flex-shrink-0 sm:pl-8">
                    <a
                      href="#video"
                      className="inline-flex pl-4 pr-3 py-2 pb-1 text-sm tracking-[2px] uppercase border-2 border-opacity-30 font-bold hover:border-opacity-100"
                    >
                      <span>Watch</span>
                      <span className="relative -top-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                          />
                        </svg>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <span
                className="h-[150px] w-[159px] sm:h-[250px] sm:w-[266px] absolute top-0 left-0 opacity-25 -mt-8 -ml-6"
                style={{
                  backgroundImage: "url(./floral-1@2x.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  transform: "rotate(180deg) scaleX(-1)",
                }}
              ></span>
              <span
                className="h-[150px] w-[196px] sm:h-[250px] sm:w-[328px] absolute top-0 right-0 md:right-[50%] opacity-25 -mt-12 -mr-16"
                style={{
                  backgroundImage: "url(./floral-2@2x.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  transform: "rotate(-120deg) scaleX(-1)",
                }}
              ></span>
              <span
                className="h-[150px] w-[159px] sm:h-[250px] sm:w-[266px] absolute bottom-0 right-0 md:right-[50%] opacity-25 -mb-8 -mr-6"
                style={{
                  backgroundImage: "url(./floral-1@2x.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  transform: "rotate(-90deg)",
                }}
              ></span>
              <span
                className="h-[150px] w-[196px] sm:h-[250px] sm:w-[328px] absolute bottom-0 left-0 opacity-25 -mb-8 -ml-16"
                style={{
                  backgroundImage: "url(./floral-2@2x.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  transform: "rotate(45deg) scaleX(-1)",
                }}
              ></span>
            </div>
          </div>
        </section>
      </main>
      <section id="video" className="w-full h-full bg-black">
        <div className="flex flex-col justify-center h-screen max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="848"
              height="477"
              src="https://www.youtube-nocookie.com/embed/lq68vYYLSDc?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="inline-flex mx-auto mt-8">
            <a
              href="#"
              className="flex pl-4 pr-3 py-2 pb-1 text-sm tracking-[2px] uppercase border-2 border-opacity-30 font-bold hover:border-opacity-100"
            >
              <span>Back to top</span>
              <span className="relative -top-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </span>
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

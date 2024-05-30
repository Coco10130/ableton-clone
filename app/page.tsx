import StickyNavBar from "./(components)/StickyNavBar";

export default function Home() {
  return (
    <>
      <StickyNavBar />
      <div className="relative mt-[7rem]">
        <img
          src="/images/abelton-bg.jpg"
          alt="Ableton Background"
          className="w-full h-auto px-24 py-1"
        />
        <h1 className="absolute text-red top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-3xl md:text-6xl lg:text-[10rem] text-red-500">
          Ableton
        </h1>
      </div>

      <div className="flex flex-col align-center justify-center w-full h-auto px-6 sm:px-12 md:px-24 lg:px-[22rem] my-32">
        <p className="mb-4 text-lg sm:text-xl lg:text-2xl font-bold">
          We make <span className="text-blue">Live</span>,{" "}
          <span className="text-blue">Push</span> and{" "}
          <span className="text-blue">Link</span> - uniqie software and hardware
          for music creation and performance. With these products, our community
          of users creates amazing things.
        </p>
        <p className="text-sm sm:text-md md:text-lg text-gray-500 p-1">
          Ableton was founded in 1999 and released the first version Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center w-full h-auto p-20 z-20">
          <img
            src="/images/image.jpg"
            alt="Ableton Live"
            className="w-full h-auto max-w-[35rem] max-h-[35rem]"
          />
        </div>

        <div className="relative flex justify-center items-center w-[126%] h-auto ml-[-25%] bg-yellow z-10">
          <div className="max-w-[25rem] max-h-[25rem] w-full h-auto">
            <img
              src="/images/image2.jpg"
              alt="Ableton"
              className="w-auto h-auto "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-auto px-6 sm:px-12 md:px-24 lg:px-[22rem] my-32">
        <p className="mb-4 text-lg sm:text-xl md:text-2xl font-bold">
          Making music isn't easy. It takes time, effort, and learning. But when
          you're in the flow, it's increadibly rewarding.
        </p>
        <p className="text-sm text-gray-500 sm:text-md md:text-lg p-1">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-auto px-6 sm:px-12 md:px-24 lg:px-[22rem] my-20">
        <div className="w-full h-[30rem]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9SbnhgjeyXA"
            title="YouTube Video"
            frameBorder={0}
            allowFullScreen
          ></iframe>
          <p className="p-3 text-sm text-gray-500">
            Why ableton - Juanpe Bolivar
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-auto px-6 sm:px-12 md:px-24 lg:px-[22rem] my-32">
        <p className="text-lg mb-4 sm:text-xl md:text-2xl font-bold">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </p>
        <p className="text-sm text-gray-500 sm:text-md md:text-lg p1">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="relative flex flex-col justify-center items-center gap-28 bg-lime w-[116%] mr-[-15%] h-auto p-12">
          <div className="max-w-[25rem] max-h-[20rem] w-full h-auto">
            <img
              src="/images/image3.jpeg"
              alt="Ableton Live"
              className="w-full h-full"
            />
          </div>
          <div className="max-w-[25rem] max-h-[20rem] w-full h-auto">
            <img
              src="/images/image4.jpeg"
              alt="Ableton Live"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full p-20 z-20 ml-[-10%]">
          <img
            src="/images/image5.jpg"
            alt="Ableton Live"
            className="w-full h-auto max-w-[35rem] max-h-[35rem]"
          />
        </div>
      </div>
    </>
  );
}

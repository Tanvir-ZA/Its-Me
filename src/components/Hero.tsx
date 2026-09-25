import profileImage from "../assets/pic1.png.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-28"
    >
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT */}
        <div className="fade-up">

          

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-zinc-100 sm:text-6xl md:text-8xl">

            MD Sabbirul

            <span className="block text-zinc-500">
              Hoq<span className="text-indigo-400">.</span>
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            I design and build modern digital experiences with
            clean interfaces, thoughtful interactions and
            technologies that bring ideas to life.
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="primary-button rounded-full bg-zinc-100 px-7 py-3.5 text-sm font-medium text-zinc-950"
            >
              Explore my work
              <span className="ml-2">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              Let's talk
            </a>

          </div>

          {/* Social */}

          <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500">

            <a
              href="#"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Email
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center md:justify-end">

          <div className="float relative">

            {/* Glow */}

            <div className="absolute -inset-10 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Image frame */}

            <div className="relative h-[360px] w-[290px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl sm:h-[450px] sm:w-[350px]">

              <img
                src={profileImage}
                alt="MD Sabbirul Hoq"
               className="h-full w-full object-cover grayscale-[15%] transition duration-700 hover:scale-105"
              />

              {/* Image gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            </div>

            {/* Floating label */}

            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-md">

              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Based in
              </p>

              <p className="mt-1 text-sm text-zinc-200">
                Bangladesh
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll indicator */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-600 md:flex">

        <span className="h-8 w-px bg-zinc-700" />

        Scroll to explore

      </div>

    </section>
  );
};

export default Hero;
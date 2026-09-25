const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between border-b border-zinc-800 pb-6">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-indigo-400">
              01 / About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
              A little about me<span className="text-indigo-400">.</span>
            </h2>
          </div>

          <span className="hidden text-sm text-zinc-600 md:block">
            Get to know me
          </span>

        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">

          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
              Who I am
            </p>

            <h3 className="mt-5 text-3xl font-medium leading-tight text-zinc-200 md:text-4xl">
              I enjoy turning ideas into
              <span className="text-zinc-500">
                {" "}useful digital experiences.
              </span>
            </h3>
          </div>

          {/* Right */}
          <div className="space-y-6 text-base leading-8 text-zinc-400 md:text-lg">

            <p>
              I'm MD Sabbirul Hoq, a developer interested in building
              modern and responsive web experiences. I enjoy exploring
              new technologies and turning ideas into clean,
              functional interfaces.
            </p>

            <p>
              My focus is on writing simple, maintainable code while
              paying attention to the details that make a website
              feel polished and enjoyable to use.
            </p>

            <p>
              I'm continuously learning, experimenting with new
              technologies, and building projects that help me grow
              as a developer.
            </p>

          </div>

        </div>

        {/* Small info cards */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-3">

          <div className="bg-[#09090b] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Focus
            </p>

            <p className="mt-3 text-lg text-zinc-200">
              Web Development
            </p>
          </div>

          <div className="bg-[#09090b] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Approach
            </p>

            <p className="mt-3 text-lg text-zinc-200">
              Clean & Simple
            </p>
          </div>

          <div className="bg-[#09090b] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Currently
            </p>

            <p className="mt-3 text-lg text-zinc-200">
              Learning & Building
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
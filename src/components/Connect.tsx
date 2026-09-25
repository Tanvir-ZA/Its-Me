const Connect = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:px-8 md:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="border-b border-zinc-800 pb-6">

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-indigo-400">
            04 / Connect
          </p>

          <span className="text-sm text-zinc-600">
            Have an idea?
          </span>

        </div>

        {/* Main CTA */}
        <div className="py-20 md:py-28">

          <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-zinc-100 sm:text-6xl md:text-8xl">
            Let's build something
            <span className="block text-zinc-600">
              meaningful<span className="text-indigo-400">.</span>
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
            Whether you have a project in mind, want to collaborate,
            or simply want to say hello — my inbox is always open.
          </p>

          {/* Email Button */}
          <div className="mt-10">

            <a
              href="mailto: hoq.sabbirul@email.com"
              className="group inline-flex items-center gap-4 rounded-full bg-zinc-100 px-7 py-4 text-sm font-medium text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              Get in touch

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-zinc-100 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

          </div>

        </div>

        {/* Social Links */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">

          <a
            href="https://github.com/Tanvir-ZA"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#09090b] p-7 transition-colors duration-300 hover:bg-zinc-900"
          >
            <div className="flex items-center justify-between">

              <span className="text-sm text-zinc-300">
                GitHub
              </span>

              <span className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400">
                ↗
              </span>

            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Code & Projects
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sabbirul-haque-tanvir-5b671929a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#09090b] p-7 transition-colors duration-300 hover:bg-zinc-900"
          >
            <div className="flex items-center justify-between">

              <span className="text-sm text-zinc-300">
                LinkedIn
              </span>

              <span className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400">
                ↗
              </span>

            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Professional
            </p>
          </a>

          <a
            href="https://www.instagram.com/sabbirtan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#09090b] p-7 transition-colors duration-300 hover:bg-zinc-900"
          >
            <div className="flex items-center justify-between">

              <span className="text-sm text-zinc-300">
                Instagram
              </span>

              <span className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400">
                ↗
              </span>

            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Personal
            </p>
          </a>

          <a
            href="https://www.facebook.com/YuPp.tanvir.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#09090b] p-7 transition-colors duration-300 hover:bg-zinc-900"
          >
            <div className="flex items-center justify-between">

              <span className="text-sm text-zinc-300">
                Facebook
              </span>

              <span className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400">
                ↗
              </span>

            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Social
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Connect;
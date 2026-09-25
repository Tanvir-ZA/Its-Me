import projectImage from "../assets//projectimg-1.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 border-b border-zinc-800 pb-6">

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-indigo-400">
            03 / Projects
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
              Selected work
              <span className="text-indigo-400">.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              A collection of things I've built while learning,
              experimenting and creating.
            </p>

          </div>
        </div>

        {/* Featured Project */}
        <div className="premium-card group grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 md:grid-cols-[1.2fr_0.8fr]">

          {/* Project Image */}
          <div className="image-hover relative min-h-[300px] overflow-hidden bg-zinc-900 md:min-h-[520px]">

            <img
              src={projectImage}
              alt="Featured project"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-zinc-300 backdrop-blur-md">
              Featured Project
            </span>

          </div>

          {/* Project Content */}
          <div className="flex flex-col justify-between p-8 md:p-12">

            <div>

              <div className="flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  01
                </span>

                <span className="text-sm text-zinc-700">
                  Web Development
                </span>

              </div>

              <h3 className="mt-12 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
                Modern Web Project
                <span className="text-indigo-400">.</span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 md:text-base">
                A modern responsive web experience focused on clean
                design, smooth interactions and a simple user experience.
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">

                {["React", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-zinc-600 hover:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-3">

              {/* Live Preview */}
              <a
                href="https://my-stack-project-za.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:-translate-y-1 hover:bg-white"
              >
                Live Preview
                <span className="ml-2">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Tanvir-ZA/simple-mystackSelector-project"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:-translate-y-1 hover:border-zinc-500 hover:text-white"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
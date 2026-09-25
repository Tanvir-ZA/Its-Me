const skills = [
  {
    name: "HTML",
    icon: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 border-b border-zinc-800 pb-6">

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-indigo-400">
            02 / Skills
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
              Things I work with
              <span className="text-indigo-400">.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              Tools and technologies I use to build modern digital
              experiences.
            </p>

          </div>
        </div>

        {/* Skills marquee */}
        <div className="relative">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#09090b] to-transparent md:w-32" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#09090b] to-transparent md:w-32" />

          <div className="skill-marquee">

            <div className="skill-track">

              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="skill-pill group"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="h-6 w-6 object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />

                  <span>
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Small secondary row */}
        <div className="mt-10 flex justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
            Always learning · Always building
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
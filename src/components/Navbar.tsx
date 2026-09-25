import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-40 w-full px-5 py-5 md:px-8">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-tight text-zinc-100"
        >
          Tnvr<span className="text-indigo-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">

            <span
              className={`block h-px w-5 bg-zinc-300 transition-all duration-300 ${
                isOpen
                  ? "translate-y-[4px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-zinc-300 transition-all duration-300 ${
                isOpen
                  ? "-translate-y-[3px] -rotate-45"
                  : ""
              }`}
            />

          </div>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-5 right-5 top-[76px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >

        <div className="flex flex-col p-3">

          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-zinc-100 px-5 py-4 text-center text-sm font-medium text-zinc-950 transition hover:bg-white"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
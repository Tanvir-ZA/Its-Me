const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 px-6 py-8 md:px-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-zinc-100"
        >
          Tnvr<span className="text-indigo-400">.</span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} MD Sabbirul Hoq. All rights reserved.
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600 transition hover:text-zinc-300"
        >
          Back to top

          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>

      </div>

    </footer>
  );
};

export default Footer;
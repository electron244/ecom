const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">
                filter_vintage
              </span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-slate-100">
              MINIMA
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Shop", "Collections", "New", "About"].map((item) => (
              <a
                key={item}
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative hidden sm:block w-full max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Search essentials..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-primary/20 text-slate-700 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined">shopping_bag</span>
              </button>
              <button className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-primary/20 text-slate-700 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

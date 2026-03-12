const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[16/9] md:aspect-[21/9] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Minimalist sunlit living room with natural textures"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAWR1ZkJQJ1hKbmSUoprdedYsVrbdn3PrE9UQ0fVCfRp0hhSJ5nYhzdaRDP9QxJUHwFWA_cfLJRGXgvfW6HsPEdOP-aFUx-0g3dWNGP4jCu8xx8WB6Uj2xk7C6jxjAYXdKRjNrnA-LWsv4k2fX4-fowJxSbo0y86GzGGvHjbUGk55O_oVMrXZ4s_hHa92Y14Er1DQw_O_pM2dPkvWEUYvTIBfkItmG_AgUBHv9eYXTPdq6ki5upHBxwnygk0RVSZbexTV03Wkkhg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-light/80 dark:from-background-dark/80 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl p-8 sm:p-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-primary text-background-dark rounded-full">
              New Season
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-6">
              Aesthetic Minimalist Living
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Experience the harmony of form and function with our new season
              essentials. Lightly Animated and Responsive.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-8 rounded-lg transition-transform active:scale-95">
                Shop the Collection
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-slate-300 dark:border-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-white/20 transition-all">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

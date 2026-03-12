const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-background-dark dark:bg-slate-900 rounded-3xl p-10 sm:p-20 text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative z-10">
          Join the Minimalist Movement
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg relative z-10">
          Get curated design tips and exclusive early access to our seasonal
          drops.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10"
        >
          <input
            className="flex-1 rounded-xl bg-white/10 border-white/20 text-white px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Your email address"
            type="email"
          />
          <button
            type="submit"
            className="bg-primary text-background-dark font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

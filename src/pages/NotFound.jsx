const NotFound = () => {
  return (
    <section>
      <div className="container relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[12rem] sm:text-[18rem] md:text-[25rem] font-bold text-text-muted opacity-50 leading-none tracking-tighter">
            404
          </span>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold text-primary uppercase tracking-wider leading-tight max-w-2xl">
            Sorry, we can't find the page you're looking for.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

export default function Header() {
  return (
    <header className="text-center pt-14 pb-10 animate-fade-up">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-ember-dark">
        ✦ Your AI Travel Companion
      </p>

      <h1 className="text-4xl md:text-6xl font-display font-bold leading-none text-forest">
        Travel<span className="italic text-ember">Bot</span>
      </h1>

      <div className="w-20 h-0.5 mx-auto mt-5 mb-4" />

      <p className="text-sm font-light tracking-wide text-teal-muted">
        Explore the world, your way. Let TravelBot craft your perfect trip, tailored to your desires and budget
      </p>
    </header>
  );
}
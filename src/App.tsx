import twoGirls from './assets/L-R-Bake-Sale_under_100kb.webp'


function App() {
  return (
    <div className="min-h-screen bg-cream text-truffle-800">
      <header className ="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-peach-100 via-cream to-cream"/>
        <div className="absolute -top-24 h-72 w-72 rounded-full bg-sage-100 opacity-70 blur-3xl"/>
        <div className ="absolute -bottom-24 -left-24 h-72 w-72 rounded-full-peach-300/40 blur-3xl/>"/>
      
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28">
          <p className ="text-sm font-semibold uppercase tracking-[0.3em] text-moss-600">
            Homemade by Tiny People
          </p>
          <h1 className ="mt-6 text-5xl font-extrabold leading-tight text-mauve-500 sm:text-6xl">
            Lisa &amp; Rebekah
            <span className="block text-truffle-800">2 Desserts</span>
          </h1>
          <p className = "mx-auto mt-6 max-w-xl text-lg text-moss-600">
            Sweet treats &amp; cozy teas, baked and brewed by two little chefs
             (ages 5 &amp; 6) — made as gifts, just for you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#request" className="rounded-full bg-gold-500 px-8 py-3 text-base font-semibold text-truffle-800 shadow-lg shadow-gold-500/30 transition hover:-translate-y-0.5 hover:bg-gold-300">
             Request a treat
            </a>
            <a href="#menu" className="rounded-full border border-truffle-800/15 px-8 py-3 text-base font-semibold text-truffle-700 transition hover:bg-white/60">
              See Menu
            </a>
          </div>
        </div>
      </header>
      <section className="mx-auto opacity-70">
        <img
          src={twoGirls}
          alt="Homemade treats made by Lisa and Rebekah bake sale"
          className = "w-full h-auto rounded-3xl shadow-lg"
        />
      </section>
    </div>
  )
}

export default App
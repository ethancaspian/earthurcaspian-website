const books = [
  {
    title: 'The God of Between',
    type: 'Fiction',
    description:
      'A sci-fi dark fantasy novel exploring metaphysical tension, fractured reality, and the conflict between cosmic structure and human meaning.',
    status: 'Published',
    link: 'https://www.amazon.com/God-Between-Arthur-Caspian-ebook/dp/B0GHRQQ1SC',
  },
  {
    title: 'Governing Line I: Universal Narrative Distillation',
    type: 'Theology',
    description:
      'A theology research program proposal centered on universal narrative structure, distillation, and the search for underlying coherence.',
    status: 'Published',
    link: 'https://www.amazon.com/Governing-Line-Universal-Narrative-Distillation/dp/B0GX7G8QKX',
  },
  {
    title: 'Governing Line II: Twenty-Four Testament',
    type: 'Theology',
    description:
      'A continuation of the theology research program developing doctrinal architecture, interpretive sequence, and a larger systematic frame.',
    status: 'Published',
    link: 'https://www.amazon.com/Governing-Line-II-Twenty-Four-Testament/dp/B0GX7678ZD',
  },
  {
    title: 'Governing Line III: Minimum Revelation',
    type: 'Theology',
    description:
      'A further development of the research program focused on minimum revelation, disciplined inquiry, and theological synthesis.',
    status: 'Published',
    link: 'https://www.amazon.com/Governing-Line-III-Minimum-Revelation/dp/B0GX7J46MK',
  },
];

const preprints = [
  {
    title:
      'Hidden Record Routing in Continuous Quantum Measurement: Reversibility Beyond Detection Efficiency',
    href: 'https://dx.doi.org/10.36227/techrxiv.177156001.19976631/v1',
  },
  {
    title:
      'QEC-C III: Correlation-Adaptive Hybrid Quantum Error Correction with Decoherence-Free Subspace Inner Encoding and Renewal-Gated Decoding',
    href: 'https://dx.doi.org/10.36227/techrxiv.177155643.34160071/v1',
  },
  {
    title:
      'Born Rule from Exponential Races and Refinement Invariance: A Deterministic Microstate Account in Asymptotic Quantum Debugging',
    href: 'https://dx.doi.org/10.36227/techrxiv.176704479.98711373/v1',
  },
  {
    title:
      'Finite Primordial Temporal Sectors: Unified Bounds from Precision Clocks and Bell Tests',
    href: 'https://dx.doi.org/10.36227/techrxiv.176539483.32515226/v1',
  },
  {
    title:
      'Q-Loop 2: Filter-Function Engineering for Deterministic Coherence Enhancement on NISQ Hardware',
    href: 'https://dx.doi.org/10.36227/techrxiv.176532012.20874351/v1',
  },
  {
    title:
      'Adaptive Q-Loop: Self-Tuning Continuous Dynamical Decoupling for Field-Deployable Quantum Sensors',
    href: 'https://dx.doi.org/10.36227/techrxiv.176470631.19639964/v1',
  },
  {
    title:
      'Q-Loop-Enabled Deterministic Coherence Management for Portable Quantum Sensors',
    href: 'https://dx.doi.org/10.36227/techrxiv.176422340.07072514/v1',
  },
  {
    title: 'QEC-C II: Robust Control under Correlated Decoherence',
    href: 'https://dx.doi.org/10.36227/techrxiv.176369626.61931847/v1',
  },
  {
    title:
      'Deterministic Objective Reduction via Environmental Selection: Pairwise CPTP Drivers, Tempo Modulation, and Higher-Order Mirror Descent',
    href: 'https://zenodo.org/doi/10.5281/zenodo.17380672',
  },
  {
    title: 'Q-Loop Deterministic Coherence Scaling Without Feedback in NISQ Systems',
    href: 'https://zenodo.org/doi/10.5281/zenodo.17329011',
  },
  {
    title: 'QEC-C: Adaptive-Scaling Quantum Error Correction for NISQ Systems',
    href: 'https://zenodo.org/doi/10.5281/zenodo.17329218',
  },
  {
    title: 'Quantum Jump Theory: A Hybrid Framework for Unified Collapse and Decoherence (v14)',
    href: 'https://zenodo.org/doi/10.5281/zenodo.17047910',
  },
  {
    title: 'Cosmic Inception Phase Transition (CIPT): A Pre-Spacetime State Theory',
    href: 'https://zenodo.org/doi/10.5281/zenodo.16923916',
  },
  {
    title:
      'The Theory of Temporal Locations: A Unified Framework for Dynamic Spacetime and Cosmic Evolution',
    href: 'https://dx.doi.org/10.2139/ssrn.5369951',
  },
  {
    title: 'The Quantum Logic Fabric: A Testable Hypothesis for Resonance-Driven Wavefunction Collapse',
    href: 'https://dx.doi.org/10.2139/ssrn.5460574',
  },
  {
    title: 'The Genesis of the Cosmos: A Theory of Energetic Oscillation and Cyclic Re-ignition',
    href: 'https://dx.doi.org/10.2139/ssrn.5346434',
  },
];

const links = [
  {
    label: 'Website',
    value: 'earthurcaspian.com',
    href: 'https://earthurcaspian.com/',
  },
  {
    label: 'LinkedIn',
    value: 'ethanarthurcaspian',
    href: 'https://www.linkedin.com/in/ethanarthurcaspian/',
  },
  {
    label: 'ORCID',
    value: '0009-0008-7340-028X',
    href: 'https://orcid.org/0009-0008-7340-028X',
  },
  {
    label: 'GitHub',
    value: 'ethancaspian',
    href: 'https://github.com/ethancaspian',
  },
];

const stats = [
  { value: '4', label: 'Books' },
  { value: '3', label: 'Research Program Proposals' },
  { value: '1', label: 'Sci-Fi Dark Fantasy Novel' },
];

const navItems = ['About', 'Research Program', 'Books', 'Preprints', 'Links'];
const researchTags = ['Theology', 'Metaphysics', 'Systematic Inquiry', 'Published on Amazon'];

const externalProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

export default function App() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#04060c] text-white selection:bg-cyan-300 selection:text-slate-950">
      <img
        src="/space-nebula.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(2,4,10,0.94)_0%,rgba(4,7,15,0.88)_34%,rgba(6,10,20,0.72)_56%,rgba(8,10,18,0.84)_100%)]" />

      <main className="relative flex h-full gap-5 px-5 py-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <section className="flex min-w-0 flex-1 flex-col gap-4 xl:w-[60%]">
          <nav className="flex items-center justify-between rounded-full border border-white/12 bg-white/[0.06] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <a
                href="https://earthurcaspian.com/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-300 text-sm font-semibold text-slate-950 shadow-sm"
                aria-label="Open website"
                {...externalProps}
              >
                EC
              </a>
              <div>
                <div className="text-sm font-semibold text-white">Ethan A. Caspian</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Research name · E. Arthur Caspian for books
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 xl:flex">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </nav>

          <section className="rounded-[2rem] border border-white/12 bg-white/[0.06] px-6 py-5 shadow-[0_30px_100px_rgba(0,0,0,0.26)] backdrop-blur-2xl xl:px-8 xl:py-6 2xl:px-10">
            <div className="grid gap-6 xl:grid-cols-[1.45fr_0.75fr] xl:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-100/90">
                  Ethan A. Caspian · E. Arthur Caspian
                </div>
                <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-5xl xl:text-6xl 2xl:text-[4.8rem]">
                  Research, books, and preprints across cosmology, quantum theory, theology,
                  and literature.
                </h1>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8 2xl:text-lg">
                  I’m an independent researcher and writer whose work moves between cosmology,
                  quantum theory, theology, and literature. I’ve published and developed research
                  through preprint servers, with most of my work centered on cosmology and quantum
                  questions. My broader aim is to explore the structure of reality, meaning, and
                  existence through both analytical and creative writing.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href={books[0].link}
                  className="rounded-[1.6rem] border border-white/12 bg-black/28 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
                  {...externalProps}
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/85">
                    Featured novel
                  </div>
                  <div className="mt-4 overflow-hidden rounded-[1.4rem] border border-white/12 bg-black/20">
                    <img
                      src="/the-god-of-between-cover.png"
                      alt="The God of Between cover"
                      className="h-[15rem] w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-semibold tracking-[-0.03em] text-white">
                      The God of Between
                    </div>
                    <div className="mt-1 text-sm text-white/65">E. Arthur Caspian</div>
                  </div>
                </a>

                <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.4rem] border border-white/12 bg-black/25 p-4 backdrop-blur-xl"
                    >
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 xl:grid-cols-2">
            <div className="rounded-[1.7rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:p-7">
              <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/85">About</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white 2xl:text-3xl">
                Independent researcher and writer
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/68 2xl:text-base">
                My work moves between cosmology, quantum theory, theology, and literature. I
                publish research through preprint platforms, with much of my work centered on
                cosmology and quantum questions, while my creative and theological writing
                explores meaning, existence, and the structure of reality.
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/12 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:p-7">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                Research Program
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white 2xl:text-3xl">
                Theology research program
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72 2xl:text-base">
                Published under E. Arthur Caspian, The Governing Line sequence develops a
                structured theological framework focused on meaning, doctrine, method, and
                intellectual synthesis.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {researchTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/72"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:p-7">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/85">
                  Books · E. Arthur Caspian
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white 2xl:text-3xl">
                  Published works
                </h2>
              </div>
              <a
                href="https://earthurcaspian.com/"
                className="text-xs uppercase tracking-[0.16em] text-cyan-200/75 transition hover:text-cyan-100"
                {...externalProps}
              >
                earthurcaspian.com
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {books.map((book) => (
                <article
                  key={book.title}
                  className="rounded-[1.4rem] border border-white/12 bg-black/25 p-4 shadow-sm transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100/90">
                      {book.type}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/38">
                      {book.status}
                    </span>
                  </div>

                  <a
                    href={book.link}
                    className="mt-4 block h-20 rounded-[1rem] border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.03] transition hover:border-cyan-300/25"
                    aria-label={`Open ${book.title} on Amazon`}
                    {...externalProps}
                  />

                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{book.description}</p>
                  <a
                    href={book.link}
                    className="mt-3 inline-flex text-xs uppercase tracking-[0.18em] text-cyan-200/75 transition hover:text-cyan-100"
                    {...externalProps}
                  >
                    View on Amazon
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:p-7">
            <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/85">Links</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 2xl:grid-cols-4">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[1.2rem] border border-white/12 bg-black/25 p-4 shadow-sm transition hover:border-cyan-300/20 hover:bg-white/[0.08]"
                  {...externalProps}
                >
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm text-white/90">{item.value}</div>
                </a>
              ))}
            </div>
          </section>
        </section>

        <aside className="hidden xl:block xl:w-[38%] 2xl:w-[40%]">
          <div className="relative h-full overflow-hidden rounded-[2.2rem] border border-white/14 shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
            <img
              src="/space-nebula.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />

            <div className="relative flex h-full flex-col justify-between p-6 2xl:p-8">
              <div>
                <div className="inline-flex rounded-full border border-white/18 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
                  Space background feature
                </div>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white 2xl:text-4xl">
                  Quantum / Cosmology Preprints
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 2xl:text-base">
                  A visible cosmic panel using your uploaded nebula image, with your current
                  preprints layered directly on top of it.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/16 bg-black/28 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-cyan-100/85">
                  Preprints and foundational work
                </div>
                <div className="grid max-h-[48vh] gap-3 overflow-auto pr-1 2xl:max-h-[52vh]">
                  {preprints.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="rounded-[1.2rem] border border-white/14 bg-white/[0.08] px-4 py-4 text-sm leading-6 text-white/88 transition hover:border-cyan-300/30 hover:bg-white/[0.12]"
                      {...externalProps}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                <a
                  href="https://orcid.org/0009-0008-7340-028X"
                  className="mt-4 inline-flex text-xs uppercase tracking-[0.18em] text-cyan-100/85 transition hover:text-white"
                  {...externalProps}
                >
                  View full ORCID bibliography
                </a>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

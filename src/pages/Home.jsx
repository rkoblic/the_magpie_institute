import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>We are collectors of ideas that don't yet have a home.</h1>
          <p className="hero-intro">
            The Magpie Institute exists in the ungoverned space between disciplines,
            between the questions that have been answered and the questions that
            haven't yet been asked properly.
          </p>
          <p className="hero-body">
            We collect at the margins: the speculative, the overlooked, the
            almost-but-not-quite-formed. Here, a physicist's metaphor sits alongside
            a medieval manuscript, a neuroscientist's hunch converses with a poet's
            observation, and the connective tissue between them remains deliberately
            visible.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="The Magpie Institute" />
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p className="about-text">
            This is not a place that has finished deciding what it is. We are building
            something whose final form we cannot yet see—a repository for the kind of
            thinking that gets filed away as "interesting but not quite fitting the
            scope." If you've ever had a thought that didn't belong in your discipline
            but felt too alive to abandon, this is where it might find its kin.
          </p>

          <p className="about-text">
            The magpie, nature's infamous curator, doesn't distinguish between the
            precious and the merely shiny. It gathers what catches the light—a bottle
            cap beside a diamond, a fragment of mirror next to a coin—and arranges
            them according to a logic that makes sense only in retrospect. This is how
            thought actually works, before it becomes respectable.
          </p>

          <div className="inspiration-box">
            <p>
              The Salk Institute is a curious place, not easily understood, and the
              reason for it is that this is a place in the process of creation. It is
              being created and is engaged in studies of creation. We cannot be certain
              what will happen here, but we can be certain it will contribute to the
              welfare and understanding of man.
            </p>
            <div className="attribution">— Jonas Salk, 1963</div>
          </div>

          <p className="about-text">
            What emerges from these odd juxtapositions, we cannot predict. But we can
            be certain it will glint.
          </p>
        </div>
      </section>
    </>
  );
}

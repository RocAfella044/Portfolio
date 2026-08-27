import { FaQuoteLeft } from 'react-icons/fa';

export default function Article() {
  return (
    <section className="page essay">
      <div className="essay-top">
        <span className="essay-label">reflection</span>
        <h1>Art of living</h1>
        <p className="essay-intro">
          Beauty is not reserved for grand moments alone. It lives in the
          rhythm of ordinary days, in the pause before a cup of tea, in the
          texture of a street at dusk.
        </p>
      </div>

<div className="essay-body">
        <p>
          <span className="essay-dropcap">T</span>the everyday is a ready-made
          portrait if we choose to see it that way. The quiet rhythm of
          morning light, the hum of a city, the familiar shape of footsteps on
          stairs  these are rich with texture and story. By slowing down to
          notice, then translating those moments into words, I try to turn
          private experience into something shared.
        </p>

        <p>
          There is a kind of awe in attending to ordinary things. A chipped
          cup, a neighbor&apos;s laugh, the way rain gathers in gutters —
          each holds a quiet meaning. Lifting these small phenomena out of the
          background and giving them intention, so they can be admired rather
          than overlooked.
        </p>
      </div>

      <div className="essay-body">
        <p>
          Rhythm is the thread that ties life to art. I collect patterns —
          the flow of conversations, the repetition of movements, the pulse of
          a busy street — and echo those beats through texture, contrast, and
          repetition.
        </p>
      </div>

      <blockquote className="essay-quote">
        <FaQuoteLeft className="essay-quote-icon" />
        <p>
          You have to walk, and create the way by your walking; you will
          not find a ready-made path. It is shaped by the steps you take.
        </p>
        <footer>— Osho</footer>
      </blockquote>
    </section>
  );
}

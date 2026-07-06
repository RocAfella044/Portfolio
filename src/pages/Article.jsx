import React from 'react';

const Article = () => {
  return (
    <section className="page article-page">
      <div className="article-hero">
        <span className="hero-tag2">my article</span>
        <h1>Art of living</h1>
        <p className="hero-description2">
          Beauty is not reserved for grand moments alone. It lives in the rhythm
          of ordinary days, in the pause before a cup of tea, in the texture of
          a street at dusk, and in the quiet ways people connect through shared
          feeling.
        </p>
      </div>

      <div className="article-highlight-strip">
        <span className="article-pill">Observation</span>
        <span className="article-pill">Emotion</span>
        <span className="article-pill">Everyday wonder</span>
      </div>

      <article className="article-card">
        <h3>Everyday as a Canvas</h3>
        <p>
          The everyday is a ready-made portrait if we choose to see it that way.
          The quiet rhythm of morning light, the hum of a city, the familiar
          shape of footsteps on stairs — these are rich with texture and story.
          By slowing down to notice, then translating those moments into paint,
          film, sound, or words, I aim to turn private experiences into
          something shared.
        </p>
      </article>

      <article className="article-card">
        <h3>The Ordinary Made Sacred</h3>
        <p>
          There is a kind of awe in attending to ordinary things. A chipped cup,
          a neighbor’s laugh, the way rain gathers in gutters — each holds a
          quiet meaning. My practice centers on lifting these small phenomena
          out of the background and giving them intention, so they can be
          admired rather than overlooked.
        </p>
      </article>

      <article className="article-card article-summary">
        <div className="article-note">
          <h3>Rhythm, Repeat, Relate</h3>
          <p>
            Rhythm is the thread that ties life to art. I collect patterns — the
            flow of conversations, the repetition of movements, the pulse of a
            busy street — and echo those beats through texture, contrast, and
            repetition. This translation becomes a bridge between personal
            perception and public understanding.
          </p>
        </div>

        <div className="article-note">
          <h3>Lifecycle of Life</h3>
          <p>
            You have to walk, and create the way by your walking; you will not
            find a ready-made path. The path is not waiting for you to follow —
            it is shaped by the steps you take. - Osho
          </p>
        </div>
      </article>
    </section>
  );
};

export default Article;

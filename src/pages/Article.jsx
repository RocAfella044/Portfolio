import React from 'react';

const Article = () => {
  return (
    <section className="page article-page">
      <div className="article-hero">
        <span className="hero-tag">my article</span>
        <h1>Art of living</h1>
        <p className="hero-description">
          The beauty of Art is not confined to grand landscapes or rare moments
          and experiences, I believe it can be found in the rhythm of daily
          life. I believe it is our job as human to know notice it first and
          admire it and then harness in different mediums to connect different
          types of people and try to exhibit that through my work.
        </p>
      </div>

      <article className="article-card">
        <h3>Everyday as Canvas</h3>

        <p>
          The everyday is a ready-made potray if we choose to see it that way.
          The quiet routine of morning, the rhythm of footsteps on a stairwell —
          these are rich with texture and story. By slowing down to notice, and
          then translate those views into paint, film, sound, or words, I aim to
          transform private moments into shared experiences. Art that rises from
          daily life invites viewers to find beauty where they already live,
          creating connections across age, class, and culture through the simple
          act of recognition.
        </p>
      </article>
      <article className="article-card">
        <h3>The Ordinary Made Sacred</h3>

        <p>
          There is a kind of awe in attending to ordinary things. A
          chipped cup, a neighbor’s laugh, the way rain gathers in street
          gutters — each holds a microcosm of meaning. My practice centers on
          lifting these small phenomena out of background noise and presenting
          them with intention, so they can be admired rather than overlooked. In
          doing so, I hope to establish a habit of collective attention that
          revalues the small, subtle moments that actually shape how we
          experience the world.
        </p>
      </article>

      <aside className="article-summary">
        <div className="article-note">
          <h4>Rhythm, Repeat, Relate</h4>
          <p>
            Rhythm is the thread that ties daily life to artistic form. I
            collect patterns — the flow of market calls, the repetition of hand
            movements, the pulse of traffic — and use repetition, scale, and
            texture to echo those beats in my work. Translating rhythm across
            mediums makes the familiar legible to different audiences: a
            soundscape can reopen a memory for someone who would miss it
            visually, a painting can capture a tempo that text cannot. This
            translation becomes a tool for empathy, bridging personal perception
            and public understanding.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Article;

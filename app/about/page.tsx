export default function AboutPage() {
  return (
    <div className="mx-auto max-w-board px-6 py-14">
      <h1 className="font-display text-4xl italic leading-tight sm:text-5xl">
        About
      </h1>

      <div className="mt-8 max-w-prose space-y-6 text-[15px] leading-relaxed text-ink-soft">
        <p>
          I&apos;m a senior in the integrated B.S./M.S. program studying
          Computer Science and Data Science at Case Western Reserve
          University. This semester I&apos;m beginning my thesis research
          in formal verification using Lean. My technical focus sits at
          the intersection of machine learning systems, data pipeline
          optimization, and scalable backend infrastructure. I&apos;m
          looking to build on that through a Summer 2027 internship in
          Machine Learning Engineering or Systems Software Engineering,
          followed by a full-time role starting January 2028. Zürich,
          London, and major US tech hubs are my primary targets, though
          I&apos;m open to relocating anywhere for the right fit. Having
          grown up in both Spain and the UK before moving to the US for
          university, I thrive when navigating new cities and diverse
          cultures.
        </p>

        <p>
          I entered CWRU with a passion for Computer Science, but my
          coursework quickly revealed a broader interest. A drive for
          exploratory analysis and finding meaningful patterns in raw
          numbers led me to add a major in Data Science, providing a
          statistical backbone for machine learning and predictive
          modeling. At the same time, I decided to pursue a secondary
          major in Finance to ground my technical skill set in market
          mechanics, quantitative modeling, and personal financial
          literacy. I believe understanding market dynamics is essential,
          both for navigating today&apos;s tech-driven economy and for
          building tools that solve real-world business problems.
          Together, these three fields allow me to approach engineering
          challenges holistically, building efficient backends that are
          informed by rigorous data science and built for real-world
          economic constraints.
        </p>

        <p>
          That mindset drove my work over the past two summers at the
          European Spallation Source (ESS) in Lund, Sweden. Collaborating
          directly with experimental physicists, I refactored a legacy
          scientific analysis tool into a vectorized, multi-process
          architecture that cut per-file processing runtimes from 7.0s to
          0.4s. After finishing that ahead of schedule, I also integrated
          end-to-end data pipelines for two new detectors and unified
          multiple fragmented interfaces into a single diagnostic
          dashboard. Operating effectively inside a multinational research
          facility sharpened my ability to dive into unfamiliar scientific
          domains, translate domain needs into efficient code, and work
          alongside international collaborators. What I actually walked
          away with wasn&apos;t just experience, it was proof that I can
          pick up an unfamiliar system fast and deliver work to a high
          standard.
        </p>
      </div>
    </div>
  );
}
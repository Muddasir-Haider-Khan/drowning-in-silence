"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerChild, FadeIn } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { BookText, ChevronRight } from "lucide-react";

const questions = [
  {
    number: "01",
    title: "How do your products represent social groups or issues?",
    color: "text-gold",
    borderColor: "border-gold/40",
    badgeClass: "badge-gold",
    body: [
      `"Drowning in Silence" is, at its core, a film about the experience of silent psychological suffering — a theme deeply rooted in how contemporary society fails to recognise the quiet distress experienced by young people. The title itself is the most immediate representation of this social issue: to "drown" suggests an overwhelming, life-threatening force, while "in silence" implies that this is a struggle endured alone, unacknowledged, and invisible to those around the sufferer. Through the film's psychological dream-within-a-dream narrative, in which the protagonist repeatedly attempts to turn off a dripping tap but wakes up trapped inside yet another layer of the same dream, the product establishes an unflinching and empathetic portrait of helplessness — the feeling of trying to fix something small but fundamentally being unable to, no matter how many times you attempt it.`,

      `This narrative structure directly mirrors a broader social conversation around the mental health of young people, particularly young men, who are statistically less likely to openly discuss emotional or psychological distress. The male protagonist — portrayed by Shahan Akbar — is presented in an entirely domestic, intimate environment (Ziyad's home), which powerfully reinforces the idea that psychological struggles do not always originate from dramatic external events but from the ordinary, private spaces of one's everyday life. The seemingly trivial nature of the dripping tap is intentional: it represents an intrusive thought, a persistent anxiety, something that should be simple to resolve yet consumes the subconscious entirely.`,

      `The production blog itself also represents a significant social group: young, aspiring creatives from South Asian backgrounds navigating the media industry with limited financial resources. Throughout the blog, Habibullah and Ziyad are explicit about their tight student budget, their reliance on borrowed equipment, and their dependency on a social network of friends rather than professional systems. This honest documentation challenges a media landscape that often presents filmmaking as an expensive, exclusive pursuit, instead asserting that meaningful creative work can emerge from resourcefulness, collaboration, and community — values deeply embedded in South Asian youth culture.`,

      `By securing a corporate food sponsorship from Melado, organising a school-wide film screening, and navigating student council approval processes, the project also engages with ideas of youth agency within institutional structures. The blog represents young people as proactive, entrepreneurially minded individuals capable of producing work that demands a real audience and real stakeholder investment — a meaningful counter-narrative to how youth is often perceived within mainstream media discourse.`,
    ],
  },
  {
    number: "02",
    title: "How do the elements of your production work together to create a sense of 'branding'?",
    color: "text-dream-light",
    borderColor: "border-dream/40",
    badgeClass: "badge-dream",
    body: [
      `The branding of "Drowning in Silence" operates on multiple, interconnected levels — from the name and visual identity, to the blog's design language and the film's cinematic aesthetic — all of which cohere into a unified, recognisable identity. The title is the anchor of this brand. "Drowning in Silence" is evocative, metaphorically rich, and immediately communicates genre, tone, and emotional register: it is dark, introspective, and poetic. This single phrase generates a visual world — deep blues, blacks, and muted golds; quiet, heavy atmospheres; a sense of being submerged — which then informs every subsequent creative decision.`,

      `The blog, as a production diary and media artefact in its own right, reinforces this brand identity through its design system. The dark colour palette — deep blacks and navy surfaces lit by warm gold and cool purple accents — mirrors precisely the mood established by the film's cinematic aesthetic: high-contrast, dramatic lighting using the RGB LED stick lights and ring light borrowed from Shahan Akbar. The gold accent used throughout the blog's typography, buttons, and interactive elements echoes the warmth and craftsmanship of analogue filmmaking, while the purple tones evoke the surreal, dreamlike psychological space the film inhabits. The design is not incidental; it is a deliberate extension of the film's brand into the digital production diary.`,

      `The AI-generated film poster — created after multiple failed attempts at manual design — demonstrates a pragmatic yet creatively coherent approach to brand visualisation. The poster, featuring the lead actor Shahan Akbar prominently beneath the title "Drowning in Silence," applies conventions borrowed from professional film marketing: a central figure, stark contrast, and a title treatment that functions as both image and statement. Even within its AI-generated origins, the poster upholds the established visual grammar of the project's identity.`,

      `The parallel existence of Habibullah's production blog and Ziyad Baig's partner blog creates a multi-perspective brand narrative — similar to how major productions release behind-the-scenes content from multiple cast and crew members to build audience investment. Both blogs, covering the same project from different vantage points, collectively expand the project's brand presence and create a sense of a larger creative world surrounding the film. Together, the film, poster, this blog, and the partner blog constitute a coherent, deliberately constructed brand ecosystem — one that punches significantly above its student-budget origins.`,
    ],
  },
  {
    number: "03",
    title: "How do your products engage with the audience?",
    color: "text-gold",
    borderColor: "border-gold/40",
    badgeClass: "badge-gold",
    body: [
      `Audience engagement was embedded into the "Drowning in Silence" project from multiple directions simultaneously — through the film's thematic universality, the blog's candid tone, and the strategic construction of a live premiere event. Each of these layers functions differently, targeting distinct modes of audience interaction and creating a cumulative sense of investment in the project and its creators.`,

      `At the level of the film itself, the dream-within-a-dream narrative is a particularly powerful vehicle for audience engagement because it draws on an experience that is genuinely universal: everyone has encountered a dream so vivid and disorienting that waking within it felt indistinguishable from reality. By anchoring the film in this shared human experience and layering it with the familiar domestic anxiety of a dripping tap, the film creates an immediate sense of recognition and emotional resonance in its audience. The audience is not watching a distant or exotic scenario — they are watching something that could plausibly be their own subconscious experience, rendered visible.`,

      `The production blog engages its audience through a strategy of radical transparency and authentic voice. Habibullah's writing is deliberately conversational, self-aware, and honest about failure and uncertainty — acknowledging, for instance, that Day 1 of the shoot went badly, that the poster design attempt was unsuccessful, and that sponsorship prospects felt unlikely. This candour is rhetorically effective because it invites the audience into a genuine relationship with the creators rather than presenting a polished, retrospective narrative of smooth success. Readers of the blog become participants in the journey rather than consumers of a finished product, which builds a far deeper and more durable form of engagement.`,

      `The school film premiere event was the most direct and impactful form of audience engagement in the project. By partnering with the school's Film Media Club, securing SMD screen provision through a peer sponsor, and obtaining food sponsorship from Melado (50 ice creams for attendees), the event transformed the film's screening from a classroom submission into a genuine cultural occasion. The strong student turnout, the communal atmosphere, and the celebratory energy described in the final blog post all indicate that the event successfully positioned the film as something worth gathering around. The absence of lead actor Shahan Akbar from the premiere was the one note of genuine disappointment in an otherwise triumphant engagement exercise — a human detail that itself deepens the audience's emotional connection to the project's story.`,
    ],
  },
  {
    number: "04",
    title: "How did your research inform your products and the way they use or challenge conventions?",
    color: "text-dream-light",
    borderColor: "border-dream/40",
    badgeClass: "badge-dream",
    body: [
      `Research played a foundational and ongoing role in shaping the creative and technical decisions made throughout the "Drowning in Silence" project, informing both the adherence to established media conventions and the deliberate departure from them in several key areas. From the earliest ideation stage — where watching multiple A-Level graduates' film projects directly catalysed the choice of a psychological, non-linear narrative concept — to the final production choices around equipment, lighting, editing, and event management, the project demonstrates a pattern of research-informed practice.`,

      `The decision to use a Sony a6400 as the primary camera reflects research into professional-grade mirrorless cinematography — a camera widely used in independent and commercial filmmaking contexts, chosen deliberately over the more obvious student convention of smartphone or consumer camera use. While an iPhone 13 was used supplementarily for specific cinematic angles, the a6400 established the film's production value as intentionally above the baseline expectation for student work. Similarly, the three-point lighting setup — using Ziyad's RGB LED stick lights as key lights and Shahan Akbar's ring light as a fill — demonstrates clear research into lighting conventions in narrative filmmaking, specifically the use of key-to-fill ratios to shape a subject and control mood.`,

      `The choice to edit in Adobe Premiere Pro, an industry-standard professional editing application, reflects both research into and alignment with professional post-production conventions — actively resisting the student convention of using accessible but limited tools. This decision to operate within professional conventions rather than around them signals an aspiration toward industry-standard output and an understanding, gained through research, of what distinguishes professional film production from amateur.`,

      `Where the project most interestingly challenges conventions is in its incorporation of AI tools. Using ChatGPT to generate a production budget sheet and an AI image generator to produce the film poster represent a genuinely contemporary departure from conventional student media production practice. These are not shortcuts born of laziness but pragmatic, research-aware decisions: Habibullah explicitly identified that conventional poster design attempts were failing to produce professional-quality results, and applied available technology to solve the problem effectively. This reflects an understanding that the conventions of any creative industry — including ideas about authorship, design, and production process — are not fixed, and that emerging technologies provide new ways to produce work that meets or exceeds established quality standards. In this respect, "Drowning in Silence" both honours the conventions of professional filmmaking and actively pioneers new practices in how student media production can be approached, documented, and delivered to a real audience.`,
    ],
  },
];

const wordCount = 1624;

export default function CriticalReflectionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-32">

        {/* ── Hero ─────────────────────────────────── */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <motion.div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 rounded-full bg-gold/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative max-w-3xl mx-auto space-y-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-gold tracking-widest uppercase badge-gold inline-flex items-center gap-1.5"
            >
              <BookText size={11} /> A2 Media Studies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-5xl md:text-6xl font-black text-text-primary leading-tight text-balance"
            >
              Critical <span className="text-gold italic">Reflection</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed"
            >
              A 1600-word analytical essay examining the "Drowning in Silence" A2 Media Studies short film project — exploring representation, branding, audience engagement, and research-informed practice.
            </motion.p>

            {/* Word count badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <span className="badge-muted text-xs font-mono">
                ~{wordCount.toLocaleString()} words
              </span>
              <span className="badge-muted text-xs font-mono">
                4 questions
              </span>
              <span className="badge-gold text-xs font-mono">
                Habibullah Wahaaj
              </span>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6">
          <FadeIn><div className="gold-line mb-16" /></FadeIn>

          {/* ── Table of Contents ────────────────── */}
          <AnimatedSection delay={0.1} direction="up">
            <div className="glass-card p-6 mb-16">
              <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">
                Contents
              </div>
              <ol className="space-y-2">
                {questions.map((q) => (
                  <li key={q.number}>
                    <a
                      href={`#q${q.number}`}
                      className="flex items-start gap-3 group text-sm text-text-muted hover:text-gold transition-colors duration-200"
                    >
                      <span className={`font-mono text-xs mt-0.5 flex-shrink-0 ${q.color}`}>
                        {q.number}
                      </span>
                      <span className="group-hover:underline underline-offset-3 leading-snug">
                        {q.title}
                      </span>
                      <ChevronRight size={12} className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>

          {/* ── Questions + Essay Body ───────────── */}
          <StaggerContainer className="space-y-24" staggerDelay={0.15}>
            {questions.map((q, qi) => (
              <StaggerChild key={q.number}>
                <article id={`q${q.number}`} className="scroll-mt-28">
                  {/* Question header */}
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div
                      className={`flex-shrink-0 font-display text-5xl font-black italic ${q.color} opacity-20 select-none leading-none`}
                      whileInView={{ opacity: [0, 0.2] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      {q.number}
                    </motion.div>
                    <div>
                      <span className={`${q.badgeClass} text-[10px] mb-3 inline-block`}>
                        Question {q.number}
                      </span>
                      <h2 className={`font-display text-xl md:text-2xl font-bold leading-snug ${q.color}`}>
                        {q.title}
                      </h2>
                    </div>
                  </div>

                  {/* Animated left border */}
                  <motion.div
                    className={`pl-6 border-l-2 ${q.borderColor} space-y-5`}
                    initial={{ borderLeftColor: "rgba(255,255,255,0.05)" }}
                    whileInView={{ borderLeftColor: qi % 2 === 0 ? "rgba(212,168,67,0.4)" : "rgba(124,111,240,0.4)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {q.body.map((para, pi) => (
                      <motion.p
                        key={pi}
                        className="text-text-secondary text-base leading-[1.9] text-balance"
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: pi * 0.1 }}
                      >
                        {para}
                      </motion.p>
                    ))}
                  </motion.div>
                </article>

                {/* Section divider */}
                {qi < questions.length - 1 && (
                  <FadeIn>
                    <div className="gold-line mt-16" />
                  </FadeIn>
                )}
              </StaggerChild>
            ))}
          </StaggerContainer>

          {/* ── Footer note ────────────────────── */}
          <AnimatedSection delay={0.1} direction="up">
            <div className="mt-20 glass-card p-8 text-center space-y-3 border-t-2 border-gold/20">
              <div className="text-xs font-mono text-text-muted tracking-widest uppercase">
                End of Critical Reflection
              </div>
              <p className="text-sm text-text-muted">
                Written by{" "}
                <span className="text-gold font-semibold">Habibullah Wahaaj</span>
                {" "}· A2 Media Studies · "Drowning in Silence"
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap pt-1">
                <span className="badge-muted text-xs">~{wordCount.toLocaleString()} words</span>
                <span className="badge-gold text-xs">February 2024</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

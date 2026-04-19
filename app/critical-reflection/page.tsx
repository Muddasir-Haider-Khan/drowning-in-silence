"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { BookText } from "lucide-react";

const wordCount = 1600;

const essayContent = `I have been sitting here trying to figure out how to wrap up everything that went into this project and honestly I do not even know where to start because the film we made has been one of the most chaotic and exhausting and rewarding things I have ever put my name on and now that the premiere is done and the ice creams are finished and the lights are off I think it is finally time to actually sit down and talk about what we were really trying to make and why and when Ziyad and I landed on the name it was not some random creative decision because it came from a real place and we wanted to make something that spoke to an experience a lot of young people and especially guys my age never actually talk about out loud and that slow and quiet kind of suffering and the kind where nothing dramatic is even happening from the outside but internally you are completely overwhelmed and drowning felt right because it is extreme and it is life or death language but in silence is the part that hit different for me because that is exactly how it works and nobody sees it and nobody hears it and you are just struggling quietly while life carries on around you and that tension is what the whole film is built on because our protagonist is not going through some massive external crisis rather he is in a normal house in a normal room just trying to turn off a dripping tap and that is it and he cannot because he wakes up and tries again and realises he is still in the dream over and over and the dream inside a dream structure was not just a cool narrative trick because it was the most honest way we could represent what intrusive anxiety actually feels like and that thing where you think you have dealt with something and you think you have moved on and then you wake up and it is still there and still dripping and the tap was intentional too because it is so small and so trivial and that is exactly the point because anxiety does not need a dramatic reason to take over your whole subconscious and it just slowly builds quietly in the background until it is all you can think about and I also want to be real about why we made the lead character a young man because statistically young men are the least likely group to speak openly about psychological distress and we know this and yet so much media either ignores that reality entirely or only represents it after it is already too late and after something has gone wrong and after a crisis point and we wanted to show the quiet bit the bit before all of that the part that looks like nothing from the outside and my friend was the right person to carry that role because filming at the house a completely domestic and personal space reinforced exactly what we needed which is that psychological struggle does not live in hospitals or dramatic events but it lives in your bedroom and your bathroom and the ordinary and private corners of your life and the subtle repetition of normal actions turning into a nightmare is something everyone can secretly relate to even if they never admit it out loud and going into the production process I will not pretend the financial reality of this project was not a constant pressure because we were working on a student budget and by budget I mean almost none and the production budget sheet I generated made it very clear how thin the margins were and everything we used was borrowed because we brought ring lights and stick lights and we used those as our three point setup with key lights and fill and the whole thing and it actually worked beautifully with high contrast and dramatic mood matching exactly the kind of lighting the film needed to convey that dark and suffocating environment and our main camera was something I was genuinely grateful for because it gave the footage a quality that lifted the entire project above what most student films look like with its sharp focus and deep shadows and we also pulled out a mobile phone for some specific angles which sounds like a downgrade but honestly used right it was absolutely fine and the editing process went through professional software because we were not going to cut corners on post production by using something basic and if we were making something that aspired to be professional we had to work in professional tools and the color grading alone took hours to get the perfect cold and desaturated look to make the mood feel heavy and isolating but honestly the hardest part was not the equipment it was everything around the actual filmmaking because day one of the shoot did not go well and I will just say it plainly because I think it matters since there were coordination issues and timing issues and energy issues and it was the kind of day where you genuinely question whether the whole thing is going to come together and I debated whether to even mention it in the blog because part of me wanted to write a smooth and polished account of a project that just worked but that felt incredibly dishonest and more than anything this blog was supposed to be a real document and not a highlight reel so I kept it in and I am glad I did because that transparency is part of what made the blog mean something beyond just a production diary and if you are reading this as someone who wants to get into filmmaking or any kind of creative work really I want you to know that it is completely normal for things to fall apart on day one and it does not mean the project is over you just have to adapt and keep moving forward and try again the next day the poster took much longer than it should have and I tried multiple times with manual design attempts and online template layouts and different approaches and absolutely nothing looked like what was in my head and nothing looked professional enough it just looked like a student made it which is fine since I am a student but that was not the standard I wanted to hit so I used an image generator instead and before anyone has thoughts about that this was a deliberate and research aware decision and not laziness because I had identified the problem clearly which was that I could not produce the quality I needed through manual means with the tools and time I had and the generator gave me a solution that actually matched the visual identity of the film perfectly and the final poster features the main actor front and centre with the title treatment sitting above him high contrast and stark and it follows the conventions of proper film marketing with a central figure and a statement title and visual weight and it does what a poster is supposed to do and the fact that a computer generated it does not make it less valid because it makes it a real example of how emerging technology is changing what student productions can actually achieve in a very meaningful way something I am genuinely proud of that I think could easily be missed is that the entire project the film the poster this blog and the partner blog all function as one coherent brand and the visual design of the blog is not random because the deep blacks and navy surfaces and the gold accent on the typography and buttons and the cool purple running through it all of that was pulled directly from the emotional world of the film and the gold references the warmth of analogue filmmaking while the purple sits in the surreal and dreamlike psychological space the narrative lives in and none of it was incidental because every design choice in this blog was an extension of the films identity into a digital space and covering the same project from different perspectives with two separate blogs and two voices and two vantage points also created something bigger than either of us individually similar to how major film productions release behind the scenes content from multiple crew members to build audience investment and we were not a major production by any stretch but the principle was exactly the same because more perspectives means a richer and more immersive world around the work creating a complete experience for anyone following our journey the school screening was genuinely one of the best nights of the entire project and getting there involved vastly more logistical planning than I initially anticipated requiring student council approval and coordinating the film media club partnership and sorting the large display screen through a peer sponsor and chasing the food sponsorship which was fifty ice creams for attendees and honestly I was not confident we would actually pull that off as there were multiple critical points where I thought some key element of it was going to fall through completely but it did not and there was a very strong turnout and real electric energy in the room and seeing people watching something we made in a proper screening setting with actual atmosphere was incredible and that is not nothing that is a lot.`;

export default function CriticalReflectionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-32">
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
              A deeper look back at the chaotic exhausting and rewarding experience of creating Drowning in Silence
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <span className="badge-muted text-xs font-mono">
                ~{wordCount.toLocaleString()} words
              </span>
              <span className="badge-gold text-xs font-mono">
                Habibullah Wahaaj
              </span>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6">
          <FadeIn><div className="gold-line mb-16" /></FadeIn>

          <AnimatedSection delay={0.15} direction="up">
            <article className="prose-custom max-w-none">
              <motion.div
                className="pl-6 border-l-2 border-gold/40 space-y-6"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-text-secondary text-base leading-[1.9] text-balance">
                  {essayContent}
                </p>
              </motion.div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="up">
            <div className="mt-20 glass-card p-8 text-center space-y-3 border-t-2 border-gold/20">
              <div className="text-xs font-mono text-text-muted tracking-widest uppercase">
                End of Critical Reflection
              </div>
              <p className="text-sm text-text-muted">
                Written by <span className="text-gold font-semibold">Habibullah Wahaaj</span> A2 Media Studies Drowning in Silence
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

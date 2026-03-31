import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const FILMS = [
  {
    id: "1",
    title: "The Long Walk",
    subject: "Amina",
    route: "Syria to Germany",
    descriptor: "A mother's journey across borders.",
    paragraph: "This film explores the profound human impact of displacement, offering an intimate look at the challenges and triumphs along the Syria to Germany route. Amina's story is a testament to the enduring power of hope.",
    quote: "A powerful testament to the human spirit found in Amina. It challenges everything we thought we knew about the journey.",
    thumbnail: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=800&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
    director: "Tosca Looby",
    broadcaster: "Northern Pictures and SBS",
    cast: "Jess Hill",
    ctaText: "WATCH SERIES ON SBS",
  },
  {
    id: "2",
    title: "Sea of Hope",
    subject: "Yousef",
    route: "Libya to Italy",
    descriptor: "Surviving the Mediterranean crossing.",
    paragraph: "Following Yousef's harrowing journey across the Mediterranean, this documentary captures the stark realities of the crossing and the desperate search for safety on foreign shores.",
    quote: "An unflinching look at the Mediterranean crisis. Yousef's resilience is both heartbreaking and deeply inspiring.",
    thumbnail: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=800&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop",
    director: "Tosca Looby",
    broadcaster: "Northern Pictures and SBS",
    cast: "Jess Hill",
    ctaText: "WATCH SERIES ON SBS",
  },
  {
    id: "3",
    title: "Borderlands",
    subject: "Mateo",
    route: "Honduras to USA",
    descriptor: "Seeking asylum in a divided nation.",
    paragraph: "Mateo's quest for asylum highlights the complex and often unforgiving realities of the US-Mexico border. The film delves into the systemic hurdles and the personal toll of seeking a new life.",
    quote: "A crucial and timely exploration of the asylum process. Mateo's voice demands to be heard.",
    thumbnail: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1200&auto=format&fit=crop",
    director: "Tosca Looby",
    broadcaster: "Northern Pictures and SBS",
    cast: "Jess Hill",
    ctaText: "WATCH SERIES ON SBS",
  },
  {
    id: "4",
    title: "Forgotten Camps",
    subject: "Rohingya Community",
    route: "Myanmar to Bangladesh",
    descriptor: "Life in the world's largest refugee camp.",
    paragraph: "An immersive look into the daily lives of the Rohingya community in Bangladesh. The film sheds light on the ongoing struggle for dignity and recognition in the face of displacement.",
    quote: "A necessary spotlight on a forgotten crisis. The resilience of the Rohingya community is unforgettable.",
    thumbnail: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=800&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?q=80&w=1200&auto=format&fit=crop",
    director: "Tosca Looby",
    broadcaster: "Northern Pictures and SBS",
    cast: "Jess Hill",
    ctaText: "WATCH SERIES ON SBS",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Cinematic Background - Double Exposure Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/36841120/pexels-photo-36841120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero background"
            className="w-full h-full object-cover object-center opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-left text-foreground mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Echoes of <br className="md:hidden" />
            <span className="italic text-primary">Humanity</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl font-light max-w-2xl mb-12 text-foreground/80"
          >
            Four films. Four journeys. One shared search for dignity in the face of the global migrant crisis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6"
          >
            <Link
              to="/films"
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label="Explore the Films"
            >
              <Play size={18} className="fill-current" />
              Explore the Films
            </Link>
            <Link
              to="/about"
              className="group flex items-center gap-2 text-foreground border border-foreground/30 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-foreground/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label="Learn more about the project"
            >
              About the Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Films Preview */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">The Films</h2>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">
              A cinematic anthology documenting the perilous routes, the waiting, and the resilience of those forced to leave home.
            </p>
          </div>

          <div className="flex flex-col gap-32">
            {FILMS.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24"
              >
                {/* Left Side - Sticky for each film */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit flex flex-col gap-8">
                  <div className="relative aspect-video bg-muted overflow-hidden rounded-xl w-[85%] max-w-[320px] shadow-sm">
                    <img
                      src={film.thumbnail}
                      alt={`${film.title} thumbnail`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="font-serif text-lg text-foreground uppercase tracking-widest mb-1">Director:</h4>
                      <p className="text-sm font-sans text-foreground/60 uppercase tracking-widest">{film.director}</p>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-foreground uppercase tracking-widest mb-1">Broadcaster:</h4>
                      <p className="text-sm font-sans text-foreground/60 uppercase tracking-widest">{film.broadcaster}</p>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-foreground uppercase tracking-widest mb-1">Cast:</h4>
                      <p className="text-sm font-sans text-foreground/60 uppercase tracking-widest">{film.cast}</p>
                    </div>
                  </div>

                  <button 
                    className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase w-fit transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    aria-label={`Watch ${film.title} on SBS`}
                  >
                    {film.ctaText}
                  </button>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="lg:w-2/3 flex flex-col gap-8 lg:py-12">
                  <h3 className="font-serif text-4xl md:text-5xl">{film.title}</h3>
                  
                  {/* Big Video Placeholder */}
                  <Link 
                    to={`/films/${film.id}`} 
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm"
                    aria-label={`Watch trailer for ${film.title}`}
                  >
                    <div className="relative aspect-video bg-muted overflow-hidden rounded-sm">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-black pl-1 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                          <Play size={24} className="fill-black" />
                        </div>
                      </div>
                    </div>
                  </Link>

                  <p className="text-foreground/80 leading-relaxed text-xl mt-2">
                    {film.paragraph}
                  </p>
                  <blockquote className="border-l-2 border-primary pl-6 italic text-foreground/70 text-2xl my-6">
                    "{film.quote}"
                  </blockquote>
                  <div className="mt-4">
                    <Link
                      to={`/films/${film.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest border-b border-foreground/30 pb-1 hover:text-primary hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-primary rounded-sm"
                      aria-label={`Read presenter statement for ${film.title}`}
                    >
                      Read Presenter Statement <ArrowRight size={14} />
                    </Link>
                  </div>
                  {/* Add some extra padding at the bottom so the sticky effect is noticeable */}
                  <div className="h-32 lg:h-64"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Use Cases */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Beyond the Screen</h2>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-12 font-light">
              These films are designed to spark dialogue and inspire action. We partner with community organizers, NGOs, and educational institutions to host screenings that matter.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium tracking-wide hover:bg-background/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-background"
              aria-label="Host a community screening"
            >
              Host a Community Screening
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { Play, ArrowLeft, ExternalLink, BookOpen, Link as LinkIcon, Share2, MinusCircle } from "lucide-react";
import { FILMS_DATA } from "./Films";

export default function FilmDetail() {
  const { id } = useParams();
  const film = FILMS_DATA.find((f) => f.id === id);

  if (!film) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Film not found</h1>
          <Link to="/films" className="text-primary hover:underline">Return to films</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header Section */}
      <section className="w-full pt-32 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <Link 
            to="/films" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 text-sm uppercase tracking-widest font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1"
            aria-label="Back to Films"
          >
            <ArrowLeft size={16} /> Back to Films
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="uppercase tracking-widest text-primary text-sm font-medium mb-4">
              {film.subject} • {film.route}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground">{film.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Video Player Placeholder */}
              <div 
                className="relative aspect-video bg-foreground rounded-sm overflow-hidden mb-6 flex items-center justify-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                role="button"
                tabIndex={0}
                aria-label={`Play main video for ${film.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Play video logic here
                  }
                }}
              >
                <img src={film.image} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity" />
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-10 border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white/70 text-xs font-mono">
                  <span>00:00 / {film.runtime}</span>
                  <span className="flex gap-2">
                    <button className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1" aria-label="Toggle Closed Captions">CC</button>
                    <button className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1" aria-label="View Transcript">Transcript</button>
                  </span>
                </div>
              </div>

              {/* Mini Video Parts */}
              <div className="grid grid-cols-4 gap-4 mb-8" role="list" aria-label="Video Parts">
                {[1, 2, 3, 4].map((part) => (
                  <div 
                    key={part} 
                    className="group cursor-pointer flex flex-col gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm"
                    role="listitem"
                    tabIndex={0}
                    aria-label={`Play Part ${part}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        // Play part logic here
                      }
                    }}
                  >
                    <div className="relative aspect-video bg-muted rounded-sm overflow-hidden">
                      <img src={`https://picsum.photos/seed/${film.id}-part${part}/600/400`} alt={`Part ${part}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                        <Play className="text-white fill-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" size={16} />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                        05:00
                      </div>
                    </div>
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-primary transition-colors">Part {part}</span>
                  </div>
                ))}
              </div>

              {/* Sharing Links */}
              <div className="flex flex-wrap items-center gap-6 mb-10 border-y border-foreground/10 py-4" aria-label="Sharing Options">
                <button className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">
                  <BookOpen size={16} aria-hidden="true" /> Share to Google Classroom
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">
                  <LinkIcon size={16} aria-hidden="true" /> Share link with students
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">
                  <Share2 size={16} aria-hidden="true" /> Social share
                </button>
              </div>

              {/* Related Topics Tags */}
              <div className="mb-12" aria-labelledby="related-topics-heading">
                <h3 id="related-topics-heading" className="text-sm font-serif uppercase tracking-widest text-foreground/60 mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-2" role="list">
                  {["Human Rights", "Migration", "Asylum", "Global Crisis", "Resilience", "Documentary"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 bg-muted text-foreground/80 text-xs font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      role="listitem"
                      tabIndex={0}
                      aria-label={`View topic: ${tag}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          // Topic click logic here
                        }
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="font-serif text-3xl mb-6 text-foreground">The Story</h2>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-6">
                  {film.story}
                </p>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-6">
                  Through intimate interviews and breathtaking cinematography, the documentary captures the raw emotion of leaving everything behind. It explores the psychological toll of displacement and the extraordinary resilience required to build a new life in an unfamiliar land. The narrative weaves together personal anecdotes with broader socio-political contexts, offering a comprehensive look at the human cost of global crises.
                </p>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-8">
                  The filmmakers spent over two years embedded with the community, gaining unprecedented access to their daily struggles and triumphs. This extended period of observation allows the story to unfold naturally, revealing the complex layers of identity, belonging, and hope that define the refugee experience. It challenges viewers to look beyond the headlines and see the shared humanity that connects us all.
                </p>
                
                <blockquote className="border-l-2 border-primary pl-6 my-12 italic text-xl text-foreground/90 font-serif">
                  "We didn't leave because we wanted to. We left because the sea was safer than the land."
                </blockquote>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-12">
              {/* Details */}
              <div className="bg-muted/30 p-8 rounded-sm">
                <h3 className="font-serif text-2xl mb-6 border-b border-foreground/10 pb-4">Film Details</h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex flex-col">
                    <dt className="text-foreground/50 uppercase tracking-widest text-xs mb-1">Director</dt>
                    <dd className="font-medium text-foreground">{film.director}</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-foreground/50 uppercase tracking-widest text-xs mb-1">Cinematography</dt>
                    <dd className="font-medium text-foreground">{film.cinematographer}</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-foreground/50 uppercase tracking-widest text-xs mb-1">Runtime</dt>
                    <dd className="font-medium text-foreground">{film.runtime}</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-foreground/50 uppercase tracking-widest text-xs mb-1">Language</dt>
                    <dd className="font-medium text-foreground">{film.language}</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-foreground/50 uppercase tracking-widest text-xs mb-1">Year</dt>
                    <dd className="font-medium text-foreground">{film.year}</dd>
                  </div>
                </dl>
              </div>

              {/* Context */}
              <div>
                <h3 className="font-serif text-2xl mb-6">Context</h3>
                <ul className="space-y-4">
                  {film.facts.map((fact, i) => (
                    <li key={i} className="flex gap-4 items-start text-foreground/80 text-sm leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Materials for Teachers */}
              <div className="pt-6 border-t border-foreground/10">
                <div className="flex items-center gap-3 mb-6">
                  <MinusCircle className="text-primary shrink-0" size={24} />
                  <h3 className="font-serif text-2xl text-foreground">Support Materials for Teachers</h3>
                </div>
                <div className="pl-9 space-y-6">
                  <div>
                    <h4 className="text-foreground/50 uppercase tracking-widest text-xs font-bold mb-2">Using This Resource</h4>
                    <a href="#" className="text-primary font-medium hover:underline block text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                      Teaching Tips | {film.title}
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Materials for Use with Students */}
              <div className="pt-6 border-t border-foreground/10">
                <div className="flex items-center gap-3 mb-6">
                  <MinusCircle className="text-primary shrink-0" size={24} />
                  <h3 className="font-serif text-2xl text-foreground">Support Materials for Use with Students</h3>
                </div>
                <div className="pl-9 space-y-6">
                  <div>
                    <h4 className="text-foreground/50 uppercase tracking-widest text-xs font-bold mb-2">Discussion Questions</h4>
                    <a href="#" className="text-primary font-medium hover:underline block text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                      Discussion Questions | {film.title}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-foreground/50 uppercase tracking-widest text-xs font-bold mb-2">Handouts</h4>
                    <div className="space-y-3">
                      <a href="#" className="text-primary font-medium hover:underline block text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                        Perspectives Taking - {film.title} Note Catcher
                      </a>
                      <a href="#" className="text-primary font-medium hover:underline block text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                        {film.title} Primary Source Analysis Worksheet
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-foreground/50 uppercase tracking-widest text-xs font-bold mb-2">Vocabulary</h4>
                    <a href="#" className="text-primary font-medium hover:underline block text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                      Vocabulary | {film.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

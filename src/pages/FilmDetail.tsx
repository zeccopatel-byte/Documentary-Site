import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { Play, Pause, ArrowLeft, ExternalLink, BookOpen, Link as LinkIcon, Share2, MinusCircle } from "lucide-react";
import { FILMS_DATA } from "./Films";
import { useState, useRef, useEffect } from "react";

export default function FilmDetail() {
  const { id } = useParams();
  const film = FILMS_DATA.find((f) => f.id === id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeChapterTab, setActiveChapterTab] = useState('All');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const handleChapterClick = (timeInSeconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeInSeconds;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Generic video source for demonstration
  const videoSource = "https://static.vecteezy.com/system/resources/previews/011/812/387/mp4/hundreds-of-indian-runner-ducks-swimming-in-green-swamp-breeder-ducks-laying-ducks-aerial-view-4k-free-video.mp4";
  const audioSource = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  if (!film) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-sans text-4xl mb-4">Film not found</h1>
          <Link to="/films" className="text-primary hover:underline">Return to films</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative w-full pt-48 pb-24 bg-background overflow-hidden">
        {/* Hero Poster / Still */}
        <div className="absolute inset-0 z-0">
          <img
            src={film.image}
            alt={`${film.title} poster`}
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Link 
            to="/films" 
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors mb-8 text-sm uppercase tracking-widest font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1"
            aria-label="Back to Films"
          >
            <ArrowLeft size={16} /> Back to Films
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-primary text-sm font-bold mb-4 uppercase tracking-widest drop-shadow-sm">
              <span>Participant: {film.subject}</span>
              <span className="text-foreground/50">•</span>
              <span>Origin: {film.route.split(' to ')[0]}</span>
              <span className="text-foreground/50">•</span>
              <span>Route: {film.route}</span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl mb-6 text-foreground drop-shadow-md">{film.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Video Player */}
              <div className="mb-8">
                <div 
                  className="relative aspect-video bg-black rounded-sm overflow-hidden mb-2 flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  role="region"
                  aria-label={`Video player for ${film.title}`}
                >
                  <video 
                    ref={videoRef}
                    src={videoSource}
                    className="w-full h-full object-contain"
                    controls={isPlaying}
                    poster={film.image}
                    crossOrigin="anonymous"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  >
                  </video>
                  
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 group-hover:bg-black/30 transition-colors"
                      onClick={togglePlay}
                      role="button"
                      tabIndex={0}
                      aria-label="Play video"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          togglePlay();
                        }
                      }}
                    >
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-10 border border-white/20 group-hover:scale-110 transition-transform">
                        <Play className="text-white fill-white ml-1" size={32} />
                      </div>
                    </div>
                  )}

                  <div className={`absolute bottom-4 left-4 right-4 flex justify-between items-center text-white/70 text-xs font-mono transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                    <span></span>
                    <span className="flex gap-2 bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-sm">
                      <button 
                        className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1" 
                        aria-label="Toggle Closed Captions" 
                        aria-pressed="true"
                      >
                        CC
                      </button>
                      <button 
                        className={`hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1 font-bold ${showTranscript ? 'text-primary' : 'text-white'}`}
                        aria-label="Toggle Transcript" 
                        aria-expanded={showTranscript}
                        onClick={() => setShowTranscript(!showTranscript)}
                      >
                        Transcript
                      </button>
                    </span>
                  </div>
                </div>
                
                {/* Transcript Panel */}
                {showTranscript && (
                  <div className="bg-muted/30 p-4 rounded-sm border border-foreground/10 h-48 overflow-y-auto text-sm text-foreground/80 font-mono leading-relaxed" aria-live="polite">
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(0)}>00:00</span> [Wind blowing, distant footsteps]</p>
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(5)}>00:05</span> <span className="font-semibold">Narrator:</span> The journey began long before we reached the border.</p>
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(12)}>00:12</span> <span className="font-semibold">{film.subject}:</span> We packed what we could carry. Memories, mostly.</p>
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(18)}>00:18</span> [Somber music starts playing]</p>
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(25)}>00:25</span> <span className="font-semibold">Narrator:</span> Every step was a calculation of risk versus hope.</p>
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(35)}>00:35</span> <span className="font-semibold">{film.subject}:</span> I remember looking back one last time. The sky was so clear, but my heart was heavy.</p>
                    <p className="mb-2"><span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleChapterClick(45)}>00:45</span> [Sound of a train approaching in the distance]</p>
                  </div>
                )}
              </div>

              {/* Chapters & Clips */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-sans uppercase tracking-widest text-foreground/60">Chapters & Short Clips</h3>
                  <div className="flex gap-2">
                    {['All', 'Interviews', 'B-Roll'].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setActiveChapterTab(tab)}
                        className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${activeChapterTab === tab ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground/70 hover:bg-muted/80'}`}
                        aria-pressed={activeChapterTab === tab}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Video Chapters and Clips">
                  {[
                    { title: "Departure", time: "05:00", type: "Chapter", category: "B-Roll", seconds: 0 },
                    { title: "The Crossing", time: "12:30", type: "Chapter", category: "B-Roll", seconds: 30 },
                    { title: "Arrival", time: "08:15", type: "Chapter", category: "Interviews", seconds: 60 },
                    { title: "Reflection", time: "03:45", type: "Clip", category: "Interviews", seconds: 90 }
                  ].filter(part => activeChapterTab === 'All' || part.category === activeChapterTab).map((part, index) => (
                    <div 
                      key={index} 
                      className="group cursor-pointer flex flex-col gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm"
                      role="listitem"
                      tabIndex={0}
                      aria-label={`Play ${part.type}: ${part.title}`}
                      onClick={() => handleChapterClick(part.seconds)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleChapterClick(part.seconds);
                        }
                      }}
                    >
                      <div className="relative aspect-video bg-muted rounded-sm overflow-hidden">
                        <img src={`https://picsum.photos/seed/${film.id}-part${index}/600/400`} alt={`${part.type} thumbnail`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                          <Play className="text-white fill-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" size={16} />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                          {part.time}
                        </div>
                        <div className="absolute top-1 left-1 bg-primary/90 text-primary-foreground text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm font-bold">
                          {part.type}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-foreground/80 group-hover:text-primary transition-colors">{part.title}</span>
                    </div>
                  ))}
                </div>
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
                <h3 id="related-topics-heading" className="text-sm font-sans uppercase tracking-widest text-foreground/60 mb-4">Related Topics</h3>
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
                <h2 className="font-sans text-3xl mb-6 text-foreground">The Story</h2>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-6">
                  {film.story}
                </p>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-6">
                  Through intimate interviews and breathtaking cinematography, the documentary captures the raw emotion of leaving everything behind. It explores the psychological toll of displacement and the extraordinary resilience required to build a new life in an unfamiliar land. The narrative weaves together personal anecdotes with broader socio-political contexts, offering a comprehensive look at the human cost of global crises.
                </p>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-8">
                  The filmmakers spent over two years embedded with the community, gaining unprecedented access to their daily struggles and triumphs. This extended period of observation allows the story to unfold naturally, revealing the complex layers of identity, belonging, and hope that define the refugee experience. It challenges viewers to look beyond the headlines and see the shared humanity that connects us all.
                </p>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-8">
                  Beyond the physical journey, the film delves into the emotional landscape of leaving one's homeland. It captures the quiet moments of reflection, the enduring bonds of family, and the profound sense of loss that accompanies displacement. The narrative is not just about survival, but about the enduring human spirit's capacity to dream and rebuild.
                </p>
                <p className="text-foreground/80 leading-relaxed font-light text-lg mb-8">
                  By centering the voices of those directly impacted, the documentary challenges prevailing narratives and invites viewers to engage with the complexities of migration on a deeply personal level. It serves as a powerful reminder that behind every statistic is a human being with a story that deserves to be heard.
                </p>

                {/* Audio Snippet */}
                <div className="bg-muted/30 p-6 rounded-sm border border-foreground/10 mb-8 flex items-center gap-6">
                  <audio ref={audioRef} src={audioSource} crossOrigin="anonymous" onEnded={() => setIsAudioPlaying(false)} />
                  <button 
                    onClick={toggleAudio}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" 
                    aria-label={isAudioPlaying ? `Pause audio snippet from ${film.subject}` : `Play audio snippet from ${film.subject}`}
                  >
                    {isAudioPlaying ? (
                      <Pause className="text-primary-foreground fill-current" size={20} />
                    ) : (
                      <Play className="text-primary-foreground fill-current ml-1" size={20} />
                    )}
                  </button>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">Director's Note: {film.subject}'s Journey</p>
                    <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden relative">
                      <div className={`h-full bg-primary rounded-full transition-all duration-1000 ${isAudioPlaying ? 'w-full' : 'w-0'}`}></div>
                    </div>
                    <div className="flex justify-between text-xs text-foreground/50 mt-1 font-mono">
                      <span>{isAudioPlaying ? 'Playing...' : '0:00'}</span>
                      <span>0:15</span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-2 border-primary pl-6 my-12 italic text-xl text-foreground/90 font-sans">
                  "We didn't leave because we wanted to. We left because the sea was safer than the land."
                </blockquote>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-12">
              {/* Details */}
              <div className="bg-muted/30 p-8 rounded-sm">
                <h3 className="font-sans text-2xl mb-6 border-b border-foreground/10 pb-4">Film Details</h3>
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

              {/* Upcoming Events */}
              <div className="bg-primary/5 p-8 rounded-sm border border-primary/20">
                <h3 className="font-sans text-2xl mb-6 border-b border-primary/20 pb-4 text-primary">Upcoming Events</h3>
                <ul className="space-y-6">
                  <li>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-1">Oct 15, 2026 • Virtual</p>
                    <h4 className="font-medium text-base mb-1">Director Q&A Session</h4>
                    <a href="#" className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">Register Now &rarr;</a>
                  </li>
                  <li>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-1">Nov 02, 2026 • Chicago, IL</p>
                    <h4 className="font-medium text-base mb-1">Community Screening & Panel</h4>
                    <a href="#" className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">View Details &rarr;</a>
                  </li>
                </ul>
              </div>

              {/* Context */}
              <div>
                <h3 className="font-sans text-2xl mb-6">Key Migration Facts</h3>
                <ul className="space-y-4 mb-8">
                  {film.facts.map((fact, i) => (
                    <li key={i} className="flex gap-4 items-start text-foreground/80 text-sm leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Export Resources Placeholder */}
                <div className="p-4 border border-foreground/20 rounded-sm bg-background mb-8">
                  <h4 className="text-sm font-bold mb-2">Export Resources</h4>
                  <p className="text-xs text-foreground/60 mb-3">Download factsheets, data sets, and related research materials.</p>
                  <button className="w-full py-2 bg-foreground text-background text-xs font-medium uppercase tracking-widest rounded-sm hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
                    Download ZIP Archive
                  </button>
                </div>

                {/* Related Resources & Reference Links */}
                <div>
                  <h3 className="font-sans text-xl mb-4">Related Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                        <ExternalLink size={14} /> UNHCR Report on {film.route.split(' to ')[0]}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                        <ExternalLink size={14} /> Global Migration Data Portal
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm">
                        <ExternalLink size={14} /> Human Rights Watch: {film.subject}'s Route
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Support Materials for Teachers */}
              <div className="pt-6 border-t border-foreground/10">
                <div className="flex items-center gap-3 mb-6">
                  <MinusCircle className="text-primary shrink-0" size={24} />
                  <h3 className="font-sans text-2xl text-foreground">Support Materials for Teachers</h3>
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
                  <h3 className="font-sans text-2xl text-foreground">Support Materials for Use with Students</h3>
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

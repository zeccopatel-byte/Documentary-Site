import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export const FILMS_DATA = [
  {
    id: "1",
    title: "The Long Walk",
    subject: "Amina",
    route: "Syria to Germany",
    descriptor: "A mother's journey across borders.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
    runtime: "24 min",
    language: "Arabic, English",
    year: "2024",
    director: "Elena Rostova",
    cinematographer: "Marcus Chen",
    story: "Amina, a former teacher from Aleppo, fled with her two young children after their home was destroyed. This film documents their grueling 40-day journey across the Balkans, capturing the quiet moments of resilience amidst chaos. It is a testament to a mother's unyielding determination to find safety.",
    facts: [
      "Over 6.8 million Syrians have fled their country since 2011.",
      "The Balkan route remains one of the primary paths for migrants entering the EU.",
      "Women and children make up nearly half of all refugees globally."
    ]
  },
  {
    id: "2",
    title: "Sea of Hope",
    subject: "Yousef",
    route: "Libya to Italy",
    descriptor: "Surviving the Mediterranean crossing.",
    image: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1200&auto=format&fit=crop",
    runtime: "31 min",
    language: "Tigrinya, Italian",
    year: "2023",
    director: "David Okoro",
    cinematographer: "Sarah Jenkins",
    story: "Yousef spent two years in a Libyan detention center before boarding a crowded rubber dinghy bound for Europe. 'Sea of Hope' is a visceral, immersive experience of the Mediterranean crossing, focusing on the psychological toll of the journey and the complex reality of rescue operations.",
    facts: [
      "The Central Mediterranean is the world's deadliest migration route.",
      "Thousands are intercepted and returned to Libya each year.",
      "Search and rescue NGOs face increasing criminalization."
    ]
  },
  {
    id: "3",
    title: "Borderlands",
    subject: "Mateo",
    route: "Honduras to USA",
    descriptor: "Seeking asylum in a divided nation.",
    image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1200&auto=format&fit=crop",
    runtime: "28 min",
    language: "Spanish, English",
    year: "2024",
    director: "Carlos Mendez",
    cinematographer: "Ana Silva",
    story: "Fleeing gang violence in San Pedro Sula, Mateo and his teenage brother navigate the perilous journey through Mexico on 'La Bestia' train. The film explores the harsh realities of the US-Mexico border, the asylum process, and the enduring hope for a life free from fear.",
    facts: [
      "Violence and economic instability drive migration from the Northern Triangle.",
      "The asylum backlog in the US exceeds millions of cases.",
      "Migrants face extreme risks of extortion and kidnapping in transit."
    ]
  },
  {
    id: "4",
    title: "Forgotten Camps",
    subject: "Rohingya Community",
    route: "Myanmar to Bangladesh",
    descriptor: "Life in the world's largest refugee camp.",
    image: "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?q=80&w=1200&auto=format&fit=crop",
    runtime: "35 min",
    language: "Rohingya, Bengali",
    year: "2025",
    director: "Farah Ahmed",
    cinematographer: "Tariq Rahman",
    story: "In Cox's Bazar, Bangladesh, nearly a million Rohingya refugees live in limbo. This film shifts focus from the initial exodus to the daily struggle for dignity, education, and identity within the confines of the mega-camp, highlighting the voices of a stateless generation.",
    facts: [
      "The Rohingya are a stateless Muslim minority from Myanmar.",
      "Cox's Bazar hosts over 900,000 refugees in densely populated camps.",
      "Access to formal education and livelihood opportunities is severely restricted."
    ]
  },
];

export default function Films() {
  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-sans text-5xl md:text-6xl mb-6">The Films</h1>
          <p className="text-foreground/70 text-xl leading-relaxed font-light">
            Four distinct narratives that weave together the global tapestry of human migration. Each film offers an intimate look at the individuals behind the statistics.
          </p>
        </motion.div>

        <div className="space-y-24">
          {FILMS_DATA.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Link 
                  to={`/films/${film.id}`} 
                  className="block relative group overflow-hidden rounded-sm aspect-[4/3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  aria-label={`View details for ${film.title}`}
                >
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                      <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="uppercase tracking-widest text-primary text-sm font-medium mb-4">
                  {film.subject} • {film.route}
                </div>
                <h2 className="font-sans text-4xl mb-6">{film.title}</h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  {film.descriptor}
                </p>
                <div className="flex items-center gap-6 text-sm text-foreground/50 mb-8 font-mono uppercase tracking-wider">
                  <span>{film.runtime}</span>
                  <span>•</span>
                  <span>{film.year}</span>
                </div>
                <Link
                  to={`/films/${film.id}`}
                  className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors uppercase tracking-widest text-sm font-medium self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-primary rounded-sm"
                  aria-label={`View details for ${film.title}`}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

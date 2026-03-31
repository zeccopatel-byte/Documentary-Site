import { motion } from "motion/react";

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <h1 className="font-sans text-5xl md:text-7xl mb-8">About the Project</h1>
          <p className="text-foreground/80 text-xl md:text-2xl leading-relaxed font-light">
            Echoes is a multi-film documentary initiative dedicated to humanizing the global migrant crisis. We believe that behind every statistic is a story of profound resilience and an unyielding search for dignity.
          </p>
        </motion.div>

        {/* Why the project exists & Ethics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-4xl mb-8 text-primary">Why We Film</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              The narrative surrounding migration is too often reduced to political rhetoric and overwhelming numbers. Our mission is to counter this by focusing on the individual.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              By documenting these journeys with intimacy and respect, we aim to foster empathy, challenge preconceptions, and provide a platform for voices that are frequently marginalized or silenced.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-4xl mb-8 text-primary">Ethical Storytelling</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-sans text-2xl text-foreground/30">01</span>
                <div>
                  <h3 className="font-medium text-lg mb-2">Informed Consent</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">Participants are fully aware of how their stories will be used and retain the right to withdraw at any time.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-sans text-2xl text-foreground/30">02</span>
                <div>
                  <h3 className="font-medium text-lg mb-2">Collaboration</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">We work alongside our subjects, ensuring their narratives are shaped by their own perspectives, not just our lenses.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-sans text-2xl text-foreground/30">03</span>
                <div>
                  <h3 className="font-medium text-lg mb-2">Dignity First</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">We avoid gratuitous imagery of suffering, focusing instead on resilience, agency, and shared humanity.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-sans text-5xl mb-16 text-center">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Elena Rostova", role: "Director & Producer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
              { name: "David Okoro", role: "Cinematographer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
              { name: "Sarah Jenkins", role: "Editor & Sound Design", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-sans text-2xl mb-2">{member.name}</h3>
                <p className="text-primary text-sm uppercase tracking-widest font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center border-t border-foreground/10 pt-24"
        >
          <h2 className="font-sans text-3xl mb-12 text-foreground/50">Supported By</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale">
            {/* Placeholders for partner logos */}
            <div className="text-2xl font-sans font-bold">Global Film Fund</div>
            <div className="text-2xl font-sans font-black tracking-tighter">HUMAN RIGHTS WATCH</div>
            <div className="text-2xl font-sans italic">The Documentary Institute</div>
            <div className="text-2xl font-mono">UNHCR</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

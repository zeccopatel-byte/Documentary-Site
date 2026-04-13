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

        {/* Why We Film */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-sans text-4xl md:text-5xl mb-6 text-primary">Why We Film</h2>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light">
              The narrative surrounding migration is too often reduced to political rhetoric and overwhelming numbers. Our mission is to counter this by focusing on the individual.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-8 md:p-10 rounded-sm border border-foreground/5 flex items-center">
              <p className="text-foreground/70 leading-relaxed">
                By documenting these journeys with intimacy and respect, we aim to foster empathy, challenge preconceptions, and provide a platform for voices that are frequently marginalized or silenced.
              </p>
            </div>
            <div className="bg-primary/5 p-8 md:p-10 rounded-sm border-l-4 border-primary flex items-center">
              <p className="text-foreground/70 leading-relaxed">
                We recognize that migration does not happen in a vacuum. Our work is deeply informed by the complex socio-political landscapes, historical conflicts, and systemic inequalities that drive displacement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Approach & Ethics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl mb-6">Approach & Ethics</h2>
            <p className="text-foreground/70 text-lg leading-relaxed italic">
              "We are committed to a collaborative filmmaking process where the dignity, agency, and safety of our participants are paramount. Our representation seeks to empower rather than extract."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Informed Consent", desc: "Participants are fully aware of how their stories will be used and retain the right to withdraw at any time." },
              { title: "Collaboration", desc: "We work alongside our subjects, ensuring their narratives are shaped by their own perspectives, not just our lenses." },
              { title: "Dignity First", desc: "We avoid gratuitous imagery of suffering, focusing instead on resilience, agency, and shared humanity." }
            ].map((item, i) => (
              <div key={i} className="border border-foreground/10 p-8 rounded-sm hover:border-primary/50 transition-colors bg-background">
                <span className="font-mono text-primary/40 text-4xl mb-4 block">0{i + 1}</span>
                <h3 className="font-medium text-xl mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-sans text-4xl md:text-5xl mb-16 text-center">Filmmaking Teams</h2>
          
          <div className="space-y-24">
            {[
              {
                film: "The Long Walk",
                team: [
                  { name: "Elena Rostova", role: "Director & Producer", bio: "Award-winning documentary filmmaker focused on human rights.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
                  { name: "Marcus Chen", role: "Cinematographer", bio: "Visual storyteller capturing intimate moments in crisis zones.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
                  { name: "Sarah Jenkins", role: "Editor", bio: "Crafting immersive audio-visual experiences for over a decade.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" }
                ]
              },
              {
                film: "Sea of Hope",
                team: [
                  { name: "David Okoro", role: "Director", bio: "Investigative journalist turned documentary director.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
                  { name: "Sarah Jenkins", role: "Cinematographer", bio: "Specializes in marine and high-risk environment filming.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
                  { name: "Liam O'Connor", role: "Editor", bio: "Pacing expert with a background in dramatic features.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
                ]
              },
              {
                film: "Borderlands",
                team: [
                  { name: "Carlos Mendez", role: "Director", bio: "Documentarian exploring the intersection of policy and humanity.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                  { name: "Ana Silva", role: "Cinematographer", bio: "Award-winning photographer bringing a stark, realistic lens.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
                  { name: "Julian Vance", role: "Editor", bio: "Weaving complex narratives into compelling, urgent stories.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" }
                ]
              },
              {
                film: "Forgotten Camps",
                team: [
                  { name: "Farah Ahmed", role: "Director", bio: "Advocate and filmmaker amplifying stateless voices.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=400&auto=format&fit=crop" },
                  { name: "Tariq Rahman", role: "Cinematographer", bio: "Local lens capturing the daily realities of camp life.", img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=400&auto=format&fit=crop" },
                  { name: "Maya Patel", role: "Editor", bio: "Specialist in verité editing and sound design.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" }
                ]
              }
            ].map((filmGroup, index) => (
              <div key={index} className="border-t border-foreground/10 pt-12 first:border-t-0 first:pt-0">
                <h3 className="font-sans text-3xl mb-10 text-center text-primary">{filmGroup.film}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {filmGroup.team.map((member, i) => (
                    <div key={i} className="text-center group">
                      <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-transparent group-hover:ring-primary/20">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-sans text-2xl mb-2">{member.name}</h4>
                      <p className="text-primary text-sm uppercase tracking-widest font-bold mb-4">{member.role}</p>
                      <p className="text-foreground/70 text-sm leading-relaxed px-4">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="bg-foreground text-background p-12 md:p-16 rounded-sm text-center">
            <h2 className="font-sans text-3xl md:text-4xl mb-12">Advisory Board</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Dr. Amina El-Sayed", "Prof. Robert Chang", "Maria Gonzalez, Esq.", "Rev. Thomas Wright"
              ].map((advisor, i) => (
                <div key={i} className="border-t border-background/20 pt-6">
                  <h3 className="font-medium text-lg mb-1">{advisor}</h3>
                  <p className="text-background/60 text-sm uppercase tracking-widest">Board Member</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partners & Funders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <h2 className="font-sans text-3xl mb-12 text-foreground/80">Funders</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
              <div className="flex flex-col items-center gap-6 max-w-xs group">
                <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center text-foreground/30 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span className="font-mono text-xs uppercase tracking-widest">Logo</span>
                </div>
                <p className="text-sm font-medium text-foreground/80">Urban Collaborative Community Research Initiative</p>
              </div>
              <div className="flex flex-col items-center gap-6 max-w-xs group">
                <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center text-foreground/30 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span className="font-mono text-xs uppercase tracking-widest">Logo</span>
                </div>
                <p className="text-sm font-medium text-foreground/80">Provost Collaborative Research Grant (DePaul)</p>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-foreground/10 pt-16">
            <h2 className="font-sans text-2xl mb-10 text-foreground/50 uppercase tracking-widest">Partners & Supporters</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Placeholders for partner logos */}
              <div className="text-xl font-sans font-bold">Global Film Fund</div>
              <div className="text-xl font-sans font-black tracking-tighter">HUMAN RIGHTS WATCH</div>
              <div className="text-xl font-sans italic">The Documentary Institute</div>
              <div className="text-xl font-mono">UNHCR</div>
            </div>
          </div>
        </motion.div>

        {/* Acknowledgements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-muted/30 p-10 md:p-16 rounded-sm border border-foreground/5"
        >
          <h2 className="font-sans text-3xl mb-8">Acknowledgements</h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-10">
            This project would not have been possible without the generous time, expertise, and insights of many individuals. We extend our deepest gratitude to the experts interviewed:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Craig Mousin", "Monica Reyes", "Honorable James Fujimoto (Retired)"].map((name, i) => (
              <span key={i} className="px-5 py-2.5 bg-background border border-foreground/10 rounded-full text-sm font-medium shadow-sm">
                {name}
              </span>
            ))}
          </div>
          <p className="text-foreground/60 text-sm leading-relaxed max-w-2xl mx-auto">
            We also wish to thank the numerous student contributors, consultants, and community members who offered their invaluable support behind the scenes.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

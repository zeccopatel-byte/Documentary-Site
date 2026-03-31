import { motion } from "motion/react";
import { Mail, MapPin, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-sans text-5xl md:text-7xl mb-6">Connect</h1>
          <p className="text-foreground/70 text-xl leading-relaxed font-light">
            Whether you want to host a screening, partner with us, or simply start a dialogue, we want to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium uppercase tracking-widest text-foreground/60">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium uppercase tracking-widest text-foreground/60">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="inquiry" className="text-sm font-medium uppercase tracking-widest text-foreground/60">Inquiry Type</label>
                <select 
                  id="inquiry" 
                  className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors font-light appearance-none"
                >
                  <option value="screening">Host a Screening</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media / Press</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase tracking-widest text-foreground/60">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors font-light resize-none"
                  placeholder="Tell us about your organization or event..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-foreground text-background px-10 py-4 rounded-full font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all uppercase text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/5 space-y-12"
          >
            <div>
              <h3 className="font-sans text-3xl mb-8">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-sm uppercase tracking-widest text-foreground/50 mb-1">Email</p>
                    <a href="mailto:info@echoesfilm.org" className="text-lg hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm px-1">info@echoesfilm.org</a>
                    <br />
                    <a href="mailto:press@echoesfilm.org" className="text-lg hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm px-1">press@echoesfilm.org</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-sm uppercase tracking-widest text-foreground/50 mb-1">Office</p>
                    <p className="text-lg font-light leading-relaxed">
                      124 Documentary Way<br />
                      Suite 400<br />
                      New York, NY 10012
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-3xl mb-8">Follow Us</h3>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" aria-label="Follow us on Instagram">
                  <Instagram size={20} aria-hidden="true" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" aria-label="Follow us on Twitter">
                  <Twitter size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import ComicPanel from "@/components/comic/ComicPanel";
import ComicButton from "@/components/comic/ComicButton";
import SpeechBubble from "@/components/comic/SpeechBubble";
import ActionBurst from "@/components/comic/ActionBurst";
import Sticker from "@/components/comic/Sticker";
import ContactHeroCharacter from "@/components/characters/contact-hero-character";
import { resumeData } from "@/data/resumeData";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-red py-8 px-4 text-white shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CHAPTER 07" variant="yellow" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-yellow-300">
                TEAM-UP FINALE
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-white text-shadow-comic uppercase mt-1">
              LET&apos;S TEAM UP!
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <ContactHeroCharacter submitted={isSubmitted} />
            <ActionBurst text="FINALE ISSUE!" color="yellow" size="md" rotate={8} />
          </div>
        </div>
      </section>

      {/* MAIN CONTACT CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SPEECH BUBBLES & DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="DEION BERNARD">
                Got an idea? Let&apos;s build something epic together!
              </SpeechBubble>
              <SpeechBubble position="bottom-right" bgColor="cream" speaker="CREATOR MODE">
                I&apos;m available for full-stack software roles, AI projects, and innovative teams.
              </SpeechBubble>
            </div>

            <ComicPanel bgColor="paper" shadowSize="lg" className="p-6 space-y-4 border-3 border-black">
              <h3 className="font-comic text-3xl text-black border-b-2 border-black pb-2">
                DIRECT CONTACT DETAILS
              </h3>

              <div className="space-y-3 font-mono text-xs sm:text-sm font-bold text-black">
                <div className="flex items-center gap-3 border-2 border-black bg-white p-3 rounded shadow-comic-sm">
                  <Phone className="h-5 w-5 text-comic-red flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase">PHONE NUMBER</span>
                    <span>{resumeData.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-2 border-black bg-white p-3 rounded shadow-comic-sm">
                  <Mail className="h-5 w-5 text-comic-violet flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase">DIRECT EMAIL</span>
                    <span>{resumeData.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-2 border-black bg-white p-3 rounded shadow-comic-sm">
                  <MapPin className="h-5 w-5 text-comic-red flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase">LOCATION</span>
                    <span>{resumeData.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full py-2 border-2 border-black bg-black text-white font-mono text-xs font-black rounded shadow-comic-sm hover:bg-comic-red flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>GITHUB</span>
                  </button>
                </a>
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full py-2 border-2 border-black bg-comic-yellow text-black font-mono text-xs font-black rounded shadow-comic-sm hover:bg-white flex items-center justify-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    <span>LINKEDIN</span>
                  </button>
                </a>
              </div>

            </ComicPanel>

          </div>

          {/* RIGHT: COMIC CONTACT FORM */}
          <div className="lg:col-span-7">
            <ComicPanel bgColor="white" shadowSize="xl" badgeText="COMIC MESSAGE FORM" badgeBg="bg-comic-yellow">
              <div className="p-6 sm:p-10 space-y-6">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-pop-in">
                    <ActionBurst text="WHOOSH!" color="yellow" size="lg" rotate={-5} />
                    <h2 className="font-comic text-5xl text-black">MESSAGE SENT!</h2>
                    <p className="font-mono text-sm font-bold text-gray-800">
                      Thanks for reaching out! Deion will respond to your message shortly.
                    </p>
                    <ComicButton onClick={() => setIsSubmitted(false)} variant="red" size="md">
                      <span>SEND ANOTHER MESSAGE</span>
                    </ComicButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="font-mono text-xs font-black uppercase text-black block mb-1">
                        YOUR NAME:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Peter Parker"
                        className="w-full rounded-lg border-3 border-black bg-comic-paper p-3 font-mono text-sm font-bold text-black focus:bg-white focus:outline-none shadow-comic-sm"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs font-black uppercase text-black block mb-1">
                        YOUR EMAIL:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. peter@dailybugle.com"
                        className="w-full rounded-lg border-3 border-black bg-comic-paper p-3 font-mono text-sm font-bold text-black focus:bg-white focus:outline-none shadow-comic-sm"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs font-black uppercase text-black block mb-1">
                        YOUR MESSAGE:
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Let's build an amazing project together..."
                        className="w-full rounded-lg border-3 border-black bg-comic-paper p-3 font-mono text-sm font-bold text-black focus:bg-white focus:outline-none shadow-comic-sm"
                      />
                    </div>

                    <ComicButton type="submit" variant="yellow" size="lg" className="w-full">
                      <Send className="h-5 w-5" />
                      <span>SEND IT!</span>
                    </ComicButton>
                  </form>
                )}

              </div>
            </ComicPanel>
          </div>

        </div>

      </div>
    </div>
  );
}

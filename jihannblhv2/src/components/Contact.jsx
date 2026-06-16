import { Mail, Send } from 'lucide-react';
import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Turn Data into Meaningful Business Decisions"
            description="Saya terbuka untuk peluang internship, kolaborasi project, dan diskusi terkait data analysis, business analysis, dashboard, dan digital product."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-cyanx/50 hover:text-white"
                >
                  <Icon size={17} />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>

        <form
          className="glass-card premium-border rounded-[2rem] p-6 sm:p-8"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">Name</span>
              <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanx/60" name="name" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">Email</span>
              <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanx/60" type="email" name="email" placeholder="you@email.com" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-bold text-slate-300">Message</span>
            <textarea className="min-h-44 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanx/60" name="message" placeholder="Tell me about your idea..." />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Send size={17} />
              Send Message
            </MagneticButton>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-cyan-100 hover:text-white">
              <Mail size={17} />
              {profile.email}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

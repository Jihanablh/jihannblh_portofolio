import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-display text-xl font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">Data Analyst • Business Analyst • Information Systems</p>
        </div>
        <div className="flex items-center gap-3">
          {profile.socials.slice(0, 3).map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyanx/50 hover:text-white"
                aria-label={social.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Portfolio.</p>
      </div>
      <div className="mx-auto mt-8 h-px max-w-7xl overflow-hidden bg-white/10">
        <div className="h-full w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-cyanx to-transparent" />
      </div>
    </footer>
  );
}

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logoAsset from "@/assets/well-wisher-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-mix">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold">Well Wisher</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">Care Like Family</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Trusted healthcare companions for hospital visits, elderly care,
              diagnostics, and patient support across India.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gradient-mix">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={["Home", "About Us", "How It Works", "Testimonials", "Contact"]} />
          <FooterCol title="Services" items={["Hospital Visits", "Elderly Care", "Diagnostic Support", "Post Surgery", "Transportation"]} />
          <FooterCol title="Legal" items={["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"]} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Well Wisher Companion Services. All rights reserved.</div>
          <div>Care Like Family. ❤️</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i}><a href="#" className="text-sm text-white/70 transition-colors hover:text-white">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

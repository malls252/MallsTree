import { createFileRoute } from "@tanstack/react-router";
import { Github, Instagram, Youtube, Music2, Sparkles, ArrowUpRight, Banknote} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MallsTree — One Link to All" },
      { name: "description", content: "Ini adalah kumpulan link saya. Saweria, Sosial Media, dan beberapa yang lainnya." },
      { property: "og:title", content: "MallsTree — One Link to All" },
      { property: "og:description", content: "Ini adalah kumpulan link saya. Saweria, Sosial Media, dan beberapa yang lainnya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LinkInBio,
});

type LinkItem = {
  label: string;
  href: string;
  sub?: string;
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const links: LinkItem[] = [
  { label: "Instagram", sub: "@realmalls_", href: "https://www.instagram.com/realmalls_/", Icon: Instagram },
  { label: "TikTok", sub: "@realmalls_", href: "https://www.tiktok.com/@realmalls_", Icon: Music2 },
  { label: "YouTube", sub: "Vlogs & behind the scenes", href: "https://www.youtube.com/@Mollwoii", Icon: Youtube },
  { label: "GitHub", sub: "Project AI-Development", href: "https://github.com/malls252", Icon: Github },
  { label: "Support me", sub: "Saweria", href: "https://saweria.co/malls26", Icon: Banknote },
  { label: "Discord", sub: "Sanday Server", href: "https://discord.gg/5AKqUeWwc", Icon: FaDiscord },
];

function LinkInBio() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col items-center px-5 py-14">
          {/* header */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-xl" />
              <div className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-[var(--shadow-glow)]">
                <img
                  src="\src\images\profil.jpg"
                  className="h-full w-full object-cover"
                />
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Malls <span className="text-primary">.</span>
          </h1>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" />
            Gamming · Creator · Streamer · AI-Development
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Welcome to MallsTree. Bantu support streamer kecil guys hehe.
          </p>
          
        </div>

        {/* links */}
        <div className="mt-10 flex w-full flex-col gap-3">
          {links.map(({ label, sub, href, Icon, featured }) => (
            <a
              key={label}
              href={href}
              className={
                featured
                  ? "group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-primary p-4 text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                  : "group relative flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur transition-all hover:border-primary/60 hover:bg-card hover:-translate-y-0.5"
              }
            >
              <div
                className={
                  featured
                    ? "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/15"
                    : "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                }
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex flex-1 flex-col text-left">
                <span className="text-sm font-semibold leading-tight">{label}</span>
                {sub && (
                  <span
                    className={
                      featured
                        ? "text-xs text-primary-foreground/70"
                        : "text-xs text-muted-foreground"
                    }
                  >
                    {sub}
                  </span>
                )}
              </div>
              <ArrowUpRight
                className={
                  featured
                    ? "h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    : "h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }
              />
            </a>
          ))}
        </div>

        {/* footer */}
        <footer className="mt-12 flex flex-col items-center gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for collaborations
          </div>
          <p>© {new Date().getFullYear()} MallsTree. Crafted with care.</p>
        </footer>
      </div>
    </main>
  );
}

import { mediaItems } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Coverage | Santika Syaravina",
  description:
    "Work by Santika Syaravina covered by media — fashion, textile design, and creative economy.",
};

function getSourceName(url: string): string {
  try {
    const hostname = new URL(url).hostname.replace("www.", "");
    const map: Record<string, string> = {
      "youtube.com": "YouTube",
      "kompas.com": "Kompas",
      "lifestyle.kompas.com": "Kompas",
      "bekraf.go.id": "BEKRAF",
      "beritabanjarmasin.com": "Berita Banjarmasin",
      "kalsel.antaranews.com": "Antara News",
      "banjarmasin.tribunnews.com": "Tribun News",
      "kemendag.go.id": "Kemendag",
      "wolipop.detik.com": "Detik",
    };
    return map[hostname] || hostname;
  } catch {
    return "";
  }
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black border-b-4 border-accent-red">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
          <a
            href="/"
            className="text-white font-bold text-xl tracking-widest uppercase"
          >
            SS
          </a>
          <a
            href="/"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-accent-red"
          >
            ← Back
          </a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
          My Work
        </h1>
        <p className="text-xl md:text-2xl font-bold text-accent-red uppercase tracking-wide mt-2">
          Covered by Media
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {mediaItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-3 border-black bg-white p-6 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#0000FF] hover:translate-x-[-2px] hover:translate-y-[-2px] group"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`shrink-0 inline-block px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-black ${
                    item.type === "video"
                      ? "bg-accent-red text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item.type === "video" ? "▶ Video" : "Article"}
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-black uppercase leading-snug group-hover:text-accent-blue">
                    {item.title}
                  </h2>
                  <p className="text-sm text-black/50 font-bold uppercase tracking-wider mt-2">
                    {getSourceName(item.url)}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="bg-black border-t-4 border-accent-red">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center">
          <p className="text-white text-sm font-bold uppercase tracking-widest">
            &copy; 2026 Santika Syaravina
          </p>
        </div>
      </footer>
    </div>
  );
}

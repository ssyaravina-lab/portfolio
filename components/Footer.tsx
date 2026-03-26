export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-accent-red">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm font-bold uppercase tracking-widest">
          &copy; 2026 Santika Syaravina
        </p>
        <a
          href="https://www.linkedin.com/in/santikas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-bold uppercase tracking-widest hover:text-accent-red"
        >
          LinkedIn →
        </a>
      </div>
    </footer>
  );
}

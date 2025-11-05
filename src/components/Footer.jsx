export default function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="text-center text-gray-300 p-4 bg-black/60">
        <p>✨ NovaRise — Generate your gradient SVG text beautifully and effortlessly.</p>
        <p className="mt-2 text-sm">© 2025 NovaRise. All rights reserved.</p>
      </div>
      <img src="/city-footer.gif" alt="City Skyline" className="w-full h-24 object-cover" />
      <a href="#" className="absolute right-5 bottom-5">
        <img src="/up-arrow.png" className="w-10 h-10 hover:scale-110" alt="Scroll Up" />
      </a>
    </footer>
  );
}

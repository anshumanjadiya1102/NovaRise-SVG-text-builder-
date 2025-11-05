import React, { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-lg bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="NovaRise Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">NovaRise</h1>
      </div>
      <div className="flex gap-3 items-center">
        <a href="https://github.com/yourusername/NovaRise" target="_blank" className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:opacity-90">⭐ Star</a>
        <a href="https://github.com/yourusername/NovaRise" target="_blank" className="px-3 py-2 border border-cyan-400 rounded-xl hover:bg-cyan-400/20">💻 View Code</a>
        <button onClick={toggleTheme} className="ml-3 px-3 py-2 bg-gray-800 rounded-lg">{dark ? "☀️" : "🌙"}</button>
      </div>
    </header>
  );
}

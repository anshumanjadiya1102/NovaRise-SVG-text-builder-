import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function Generator() {
  const [text, setText] = useState("Hello Every Github Soul, I'm Anshuman Jadiya!");
  const [colors, setColors] = useState(["#fc5c7d", "#6a82fb", "#05dfd7"]);

  const svgCode = `
<svg fill="none" viewBox="0 0 850 60" width="850" height="60" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Segoe UI,Arial,sans-serif;display:flex;align-items:center;justify-content:center;height:100%;white-space:nowrap;">
      <style>
        @keyframes gradientFlow {
          0% { background-position: 350% 0; }
          100% { background-position: -350% 0; }
        }
        .home_title {
          font-size: 24px;
          font-weight: 700;
          color: transparent;
          background-image: linear-gradient(-220deg, ${colors.join(", ")});
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 200% 120%;
          animation: gradientFlow 10s linear infinite;
        }
      </style>
      <div class="home_title">${text}</div>
    </div>
  </foreignObject>
</svg>`;

  const copySVG = () => navigator.clipboard.writeText(svgCode);
  const downloadSVG = () => {
    const blob = new Blob([svgCode], { type: "image/svg+xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "NovaRise.svg";
    link.click();
  };

  return (
    <section className="flex flex-col items-center text-center py-10 px-6">
      <h2 className="text-3xl font-semibold mb-4">🌈 SVG Gradient Text Generator</h2>
      <input
        type="text"
        className="p-2 rounded-lg w-3/4 text-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />

      <div className="flex flex-wrap gap-5 mt-6 justify-center">
        {colors.map((color, i) => (
          <div key={i}>
            <HexColorPicker color={color} onChange={(newColor) => {
              const newColors = [...colors];
              newColors[i] = newColor;
              setColors(newColors);
            }} />
          </div>
        ))}
      </div>

      <div className="my-8 w-full flex justify-center">
        <div
          className="text-2xl font-bold"
          style={{
            backgroundImage: `linear-gradient(-220deg, ${colors.join(", ")})`,
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          {text}
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={copySVG} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">Copy SVG</button>
        <button onClick={downloadSVG} className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Download SVG</button>
      </div>
    </section>
  );
}

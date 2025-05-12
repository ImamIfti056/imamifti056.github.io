import { useState } from "react";
import { X, Settings, Sparkles, EyeOff  } from "lucide-react";

const themes = {
    red: "#ef4444",
    amber: "#f59e0b",       // Tailwind amber-500
    teal: "#0d9488",        // Tailwind teal-600
    violet: "#8b5cf6",      // Tailwind violet-500
    green: "#10b981",       // Tailwind emerald-500
    rosePink: "#d946ef",    // Tailwind fuchsia-400
    lime: "#84cc16",        // Tailwind lime-500
    cyan: "#06b6d4",        // Tailwind cyan-400
};

export default function ThemePicker({showParticles, setShowParticles}) {
  const [showColors, setShowColors] = useState(false);
  const toggleParticles = () => setShowParticles(!showParticles);

  const changeBrandColor = (bg) => {
    document.documentElement.style.setProperty('--primary-bg', bg);
    document.documentElement.style.setProperty('--primary-text', bg=='#f59e0b' || bg=='#84cc16' ? '#000' : '#fff');
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-2 lg:right-12 z-50 flex items-center flex-col-reverse gap-2">
      {/* Toggle Button */}
      <button
        onClick={() => setShowColors(!showColors)}
        className="w-12 h-12 bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:rotate-90"
      >
        {showColors ? <X size={20} /> : <Settings size={20} />}
      </button>

      {/* Color Options */}
      <div
        className={`grid grid-cols-1 gap-2 transition-all duration-400 ease-in-out ${
        showColors ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {Object.entries(themes).map(([key, value]) => (
          <button
            key={key}
            onClick={() => changeBrandColor(value)}
            className="w-5 h-5 rounded-full border-2 border-white shadow"
            style={{ backgroundColor: value }}
          />
        ))}
        <button
              onClick={toggleParticles}
              className="text-[var(--primary-bg)] py-1 rounded"
            >
              {showParticles ? <Sparkles className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
      </div>
    </div>
  );
}

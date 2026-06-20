import { useState } from "react";
import { X, Palette } from "lucide-react";

const themes = {
  teal: "#0f766e",
  indigo: "#4F46E5",
  graphite: "#334155",
  amber: "#7C3AED",
};


export default function ThemePicker() {
  const [showColors, setShowColors] = useState(false);

  const changeBrandColor = (bg) => {
    document.documentElement.style.setProperty('--primary-bg', bg);
    document.documentElement.style.setProperty('--primary-text', bg=='#b7791f' ? '#111827' : '#fff');
  };

  return (
    <div className="accent-picker">
      <button
        type="button"
        onClick={() => setShowColors(!showColors)}
        className="accent-toggle"
        aria-label="Change accent color"
      >
        {showColors ? <X size={19} /> : <Palette size={19} />}
      </button>

      <div
        className={`accent-options transition-all duration-200 ease-in-out ${
        showColors ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {Object.entries(themes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => changeBrandColor(value)}
            className="accent-swatch"
            style={{ backgroundColor: value }}
            aria-label={`Use ${key} accent`}
          />
        ))}
      </div>
    </div>
  );
}

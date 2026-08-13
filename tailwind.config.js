function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `color-mix(in srgb, var(${variableName}) calc(${opacityValue} * 100%), transparent)`;
    }
    return `var(${variableName})`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: withOpacity('--background'),
        foreground: withOpacity('--foreground'),
        card: withOpacity('--card'),
        'card-foreground': withOpacity('--card-foreground'),
        muted: withOpacity('--muted'),
        'muted-foreground': withOpacity('--muted-foreground'),
        border: withOpacity('--border'),
        input: withOpacity('--input'),
        ring: withOpacity('--ring'),
        clay: withOpacity('--clay'),
        'clay-foreground': withOpacity('--clay-foreground'),
        dune: withOpacity('--dune'),
        linen: withOpacity('--linen'),
        ink: withOpacity('--ink'),
        destructive: withOpacity('--destructive')
      },
      fontFamily: {
        display: ["Outfit", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}

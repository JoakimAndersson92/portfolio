import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    colors: {
      'base-color' : "#2D2A32",
      'highlight-color' : "#DDD92A",
      'secondary-Highlight-color': "#EAE151",
      'light-Background-color': "#EEEFA8",
      'base-Light-color': "#FAFDF6",
    },
    backgroundImage : {
      'hero-image' : "url('~/public/portrait.jpeg')"
    }
  },
  plugins: [],
} satisfies Config;

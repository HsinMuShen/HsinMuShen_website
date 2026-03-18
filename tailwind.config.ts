import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: {
          ...colors.slate,
          DEFAULT: "#475569"
        },
        canvas: "#f8f7f2",
        brand: {
          50: "#f7f5ff",
          100: "#eee9ff",
          200: "#d9ceff",
          300: "#b9a6ff",
          400: "#9175ff",
          500: "#7351f3",
          600: "#5e3bd6",
          700: "#4d2fb0",
          800: "#412a8f",
          900: "#372774"
        },
        accent: {
          100: "#fff4e8",
          200: "#ffd9ad",
          300: "#ffbf70"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.1)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(115, 81, 243, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(255, 191, 112, 0.2), transparent 30%)"
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        },
        drift: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)"
          },
          "50%": {
            transform: "translate3d(6px, -10px, 0)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite"
      },
      spacing: {
        "68": "17rem"
      }
    }
  },
  plugins: []
};

export default config;

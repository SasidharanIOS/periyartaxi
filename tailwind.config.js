/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "taxi-yellow": "#F5B800",
        "taxi-yellow-dark": "#E0A800",
        "taxi-yellow-light": "#FFD84D",
        "taxi-yellow-pale": "#FFF8DC",
        "taxi-black": "#111111",
        "taxi-card": "#1C1C1C",
        "taxi-card-2": "#242424",
        "taxi-border": "#2E2E2E",
        "taxi-muted": "#888888",
        "taxi-light": "#F0F0F0",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 2s infinite",
        "bounce-gentle": "bounceGentle 2.5s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-yellow": "pulseYellow 2.5s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        road: "road 1.5s linear infinite",
        ticker: "ticker 20s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseYellow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(245,184,0,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(245,184,0,0.7)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        road: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 20px rgba(245,184,0,0.4), 0 0 40px rgba(245,184,0,0.2)",
          },
          "50%": {
            textShadow: "0 0 30px rgba(245,184,0,0.8), 0 0 60px rgba(245,184,0,0.5)",
          },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        yellow: "0 0 20px rgba(245,184,0,0.3)",
        "yellow-lg": "0 0 40px rgba(245,184,0,0.5)",
        card: "0 4px 30px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
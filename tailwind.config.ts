import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        blueTech: "#0a4ea3",
        tealTech: "#0d9488",
        inclusion: "#15803d",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(13,148,136,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(10,78,163,0.16), transparent 40%), linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

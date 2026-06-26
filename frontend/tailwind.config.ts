import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: '#C8490B',
          light: '#FEF0E8',
          dark: '#A83A08',
        },
        usertype: {
          student: '#3060C0',
          govt: '#3060C0',
          freelancer: '#1A7A44',
          business: '#7A30C0',
          citizen: '#C85030',
        }
      },
    },
  },
  plugins: [],
};
export default config;

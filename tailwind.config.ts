import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0px 7px 7px 0px rgba(109, 109, 109, 0.04)",
        post: "0px 1px 7px 0px rgba(40, 47, 45, 0.07)",
      },
      height: {
        header: "58px",
      },
      padding: {
        layout: "58px 10%",
      },
      colors: {
        neutrals: {
          25: "#ffffff",
          50: "#e9eaea",
        },
        dark: {
          25: "#282F2D",
          50: "#484E4C",
        },
        greys: {
          25: "#737877",
          50: "#949796",
        },
        blue: {
          25: "#0A66C2",
        },
        navbar: "#2DB8A1",
      },
    },
  },
  plugins: [],
} satisfies Config;

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          surface: "#f7f9f9",
          ink: "#12201f",
          primary: "#1f8a70",
          primaryDark: "#16624f",
          accent: "#f2a541",
          muted: "#5a6b67",
          line: "#dce4e2",
          card: "#ffffff",
        },
      },
      boxShadow: {
        soft: "0 16px 40px -24px rgba(18, 32, 31, 0.3)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
};

export default config;
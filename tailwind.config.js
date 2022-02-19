module.exports = {
  content: [
    //
    "./layouts/**/*.{html,md}",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,md}",
    "./config.toml",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
    },
  },
  daisyui: {
    logs: false,
    styled: true,
    themes: true,
    base: true,
    utils: true,
    rtl: false,
    darkTheme: "dark",
  },
  plugins: [
    //
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};

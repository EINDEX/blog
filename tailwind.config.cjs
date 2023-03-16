/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "'./node_modules/flowbite/**/*.js'",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        dark: {
          css: {
            "--tw-format-body": theme("colors.gray[500]"),
            "--tw-format-headings": theme("colors.white"),
            "--tw-format-lead": theme("colors.gray[500]"),
            "--tw-format-links": theme("colors.gray[200]"),
            "--tw-format-bold": theme("colors.gray[900]"),
            "--tw-format-counters": theme("colors.gray[500]"),
            "--tw-format-bullets": theme("colors.gray[500]"),
            "--tw-format-hr": theme("colors.gray[200]"),
            "--tw-format-quotes": theme("colors.gray[900]"),
            "--tw-format-quote-borders": theme("colors.gray[300]"),
            "--tw-format-captions": theme("colors.gray[700]"),
            "--tw-format-code": theme("colors.gray[50]"),
            "--tw-format-code-bg": theme("colors.gray[900]"),
            "--tw-format-pre-code": "none",
            "--tw-format-pre-bg": "none",
            "--tw-format-th-borders": theme("colors.gray[300]"),
            "--tw-format-td-borders": theme("colors.gray[200]"),
            "--tw-format-th-bg": theme("colors.gray[50]"),
            "--tw-format-invert-body": theme("colors.gray[200]"),
            "--tw-format-invert-headings": theme("colors.white"),
            "--tw-format-invert-lead": theme("colors.gray[300]"),
            "--tw-format-invert-links": theme("colors.white"),
            "--tw-format-invert-bold": theme("colors.white"),
            "--tw-format-invert-counters": theme("colors.gray[400]"),
            "--tw-format-invert-bullets": theme("colors.gray[600]"),
            "--tw-format-invert-hr": theme("colors.gray[700]"),
            "--tw-format-invert-quotes": theme("colors.pink[100]"),
            "--tw-format-invert-quote-borders": theme("colors.gray[700]"),
            "--tw-format-invert-captions": theme("colors.gray[400]"),
            "--tw-format-invert-code": theme("colors.white"),
            "--tw-format-invert-pre-code": theme("colors.gray[300]"),
            "--tw-format-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-format-invert-th-borders": theme("colors.gray[600]"),
            "--tw-format-invert-td-borders": theme("colors.gray[700]"),
            "--tw-format-invert-th-bg": theme("colors.gray[700]"),
          },
        },
      }),
    },
    screens: {
      md: { min: "640px", max: "1200px" },
      sm: { max: "640px" },
      lg: { min: "1690px" },
    },
  },
  darkMode: "media",
  plugins: [require("flowbite-typography"), require("flowbite/plugin")],
};

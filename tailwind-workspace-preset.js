const UI_CORE_COLORS = {
  primary: {
    90: "rgba(var(--color-primary-90), <alpha-value>)",
    80: "rgba(var(--color-primary-80), <alpha-value>)",
    /* ... */
    DEFAULT: "rgba(var(--color-primary), <alpha-value>)",
  },
  "on-primary": "rgba(var(--color-on-primary), <alpha-value>)",

};
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  theme: { extend: { colors: { ...UI_CORE_COLORS } } },
};

module.exports = {
  "**/*.{js,jsx,ts,tsx}": () => {
    console.log("Lint-staged checks disabled - skipping checks");
    return [];
  },
};

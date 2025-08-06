const themeDir = __dirname + "/../../";

module.exports = async () => ({
  plugins: [
    require("postcss-import")({
      path: [themeDir],
    }),
    (await import("tailwindcss")).default(themeDir + "assets/css/tailwind.config.cjs"),
    require("autoprefixer")({
      path: [themeDir],
    }),
  ],
});

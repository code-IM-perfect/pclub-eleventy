module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addWatchTarget("./src/scripts");

  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/images/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

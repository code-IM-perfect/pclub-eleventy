const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addWatchTarget("./src/scripts");

  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("dateFormat", (jsDate) => {
    return DateTime.fromJSDate(jsDate).toFormat("d LLL yyyy");
  });

  eleventyConfig.addFilter("readingTime", (text) => {
    estimate = Math.ceil(text.split(" ").length / 240);
    if (estimate == 1) {
      return "1 Minute";
    }
    return `${estimate} Minutes`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

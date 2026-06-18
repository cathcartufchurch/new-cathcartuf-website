module.exports = function (eleventyConfig) {

    // Pass static assets through to output unchanged
    eleventyConfig.addPassthroughCopy("assets");

    // Watch CSS for changes during dev
    eleventyConfig.addWatchTarget("assets/css/");

    // Shortcode: current year (useful in footer)
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        templateFormats: ["njk", "html", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};

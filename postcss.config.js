const postcssPresetEnv = require("postcss-preset-env")

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        // prevent logical properties be compiled based on [dir], which prevent purgeCSS to flush these selectors.
        "logical-properties-and-values": false,
        // Safari doesn't support this: opacity: 50%;
        "opacity-percentage": true,
        // need prefix
        "text-decoration-shorthand": true
      }
    })
  ]
}

const { makeMetroConfig } = require("@rnx-kit/metro-config")
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks")
const { getDefaultConfig } = require("metro-config")

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig()
  return makeMetroConfig({
    projectRoot: __dirname,
    resolver: {
      resolveRequest: MetroSymlinksResolver(),
      assetExts: [...defaultConfig.resolver.assetExts, "bin"],
      sourceExts: [
        ...defaultConfig.resolver.sourceExts,
        "mjs",
      ],
    },
  })
})()
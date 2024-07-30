/* eslint-disable @typescript-eslint/no-var-requires */
const ExpoConfig = require("@expo/config");
const path = require("path");

const projectDir = path.join(process.cwd());

const { exp } = ExpoConfig.getConfig(projectDir, {
  skipSDKVersionRequirement: true,
  isPublicConfig: true,
});

console.log(JSON.stringify(exp));

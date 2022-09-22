const withTM = require("next-transpile-modules")(["@calcom/dayjs", "@calcom/ui"]);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

module.exports = withTM(nextConfig);

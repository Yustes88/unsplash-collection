/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  arrowParens: "avoid",
  bracketSpacing: false,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};

export default config;

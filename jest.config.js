const path = require("path");

module.exports = {
  roots: [path.resolve(__dirname, "./src")],
  setupFilesAfterEnv: [path.resolve(__dirname, "./setup-test-env.js")],
  transform: {
    "^.+\\.(tsx?|jsx?)$": "<rootDir>/jest-preprocess.js"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: ""
  },
  collectCoverage: false,
  testURL: "http://localhost",
  testEnvironment: "jsdom"
};

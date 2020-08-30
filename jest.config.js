module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)?', '!src/pages/_*.jsx', '!src/styles'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  modulePaths: ['<rootDir>/src/']
}

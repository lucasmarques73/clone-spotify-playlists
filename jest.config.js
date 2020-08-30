module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}

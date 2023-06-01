module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    '!src/components/**/style.js',
    '!src/components/**/index.js',
  ],
  coverageDirectory: './coverage/',
  moduleNameMapper: {
    './src(.*)$': '<rootDir>/src/$1',
    '\\/tooltip/styles.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['react-app-polyfill/jsdom'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testURL: 'http://localhost',
}

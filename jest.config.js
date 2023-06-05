module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  clearMocks: true,
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/style.ts',
    '!src/components/**/index.ts',
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

module.exports = {
    "roots": [
        "<rootDir>/src",
        "<rootDir>/test",
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "moduleFileExtensions": ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    reporters: ['default', 'jest-progress-bar-reporter', "jest-spec-reporter"]
}
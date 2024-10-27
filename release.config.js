module.exports = {
  branches: [
    'main',
    {
      name: 'next',
      channel: 'next',
      prerelease: true,
    },
  ],
  repositoryUrl: 'https://github.com/yourusername/simple-observability.git',
  tagFormat: 'v${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'BREAKING CHANGE', release: 'major' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features', hidden: false },
            { type: 'fix', section: 'Bug Fixes', hidden: false },
            {
              type: 'perf',
              section: 'Performance Improvements',
              hidden: false,
            },
            { type: 'refactor', section: 'Code Refactoring', hidden: false },
            {
              type: 'BREAKING CHANGE',
              section: 'Breaking Changes',
              hidden: false,
            },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'dist/**/*.js', label: 'JavaScript distribution' },
          { path: 'dist/**/*.d.ts', label: 'TypeScript definitions' },
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};

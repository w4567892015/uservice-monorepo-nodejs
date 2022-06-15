/* eslint-disable import/no-extraneous-dependencies */
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
  header: '# 📋 Change Log | 更新歷史 \n',
  types: [
    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修復' },
    { type: 'perf', section: '⚡ Performance Improvements | 效能優化' },
    { type: 'revert', section: '⏪ Reverts | 撤回' },
    { type: 'chore', section: '📦 Chores | 其他更新' },
    { type: 'docs', section: '📝 Documentation | 文件' },
    { type: 'refactor', section: '♻ Code Refactoring | 重構' },
    { type: 'test', section: '✅ Tests | 測試' },
    { type: 'build', section: '👷‍ Build System | 建置' },
    { type: 'ci', section: '🔧 Continuous Integration | CI 配置' },
  ],
});

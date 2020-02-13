module.exports = {
  extends: [
    './rules/regular'
  ].map(require.resolve)
};
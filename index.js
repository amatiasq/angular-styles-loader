module.exports = function(content) {
  this.cacheable();
  return content + '\nmodule.exports = module.exports[0][1]';
};

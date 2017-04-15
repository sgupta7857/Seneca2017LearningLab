exports.isValidEmail = function (email) {
  if (email.includes('@myseneca.ca') || email.includes('@senecacollege.ca')) {
    return true;
  }
  return false;
};
exports.formatSenecaEmail = function (name) {
  return name.concat('@myseneca.ca');
};

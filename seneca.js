exports.isValidEmail = function isValidEmail(email) {
  if (typeof email === 'string') {
    if (email.length > 0) {
      if (!/\s/.test(email)) {
        if (email.includes('@myseneca.ca') || email.includes('@senecacollege.ca') || email.includes('@senecac.on.ca')) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function formatSenecaEmail(name) {
  if (typeof name === 'string') {
    if (name.length > 0) {
      const str = name.trim();
      return str.concat('@myseneca.ca');
    }
  }
  return 'Invalid';
};


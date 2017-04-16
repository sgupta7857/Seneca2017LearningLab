const seneca = require('./seneca');

describe('seneca.isValidEmail()', () => {
  test('isValid returns true for simple myseneca address', () => {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', () => {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a bool', () => {
    var str = true;
    expect(seneca.isValidEmail(str)).toBe(false);
  });
  test('return false for integer', () => {
    var str = 2;
    expect(seneca.isValidEmail(str)).toBe(false);
  });
 test('returns false for email containing leading whitespace', () => {

    const str = ' sgupta44@myseneca.ca';
    expect(seneca.isValidEmail(str)).toBe(false);
  });
    test('returns true for old professor email', () => {

    var str = 'david.humphrey@senecac.on.ca';
    expect(seneca.isValidEmail(str)).toBe(true);
  });

  test('returns false for null string', () => {

    var str = null;
    expect(seneca.isValidEmail(str)).toBe(false);
  });

 

  test('returns true for professor email', () => {

    var str = 'david.humphrey@senecacollege.ca';
    expect(seneca.isValidEmail(str)).toBe(true);
  });



  test('returns false for empty string', () => {
     var str = '';
    expect(seneca.isValidEmail(str)).toBe(false);
  });
});

describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    var name = 'sgupta44';
    expect(seneca.formatSenecaEmail(name)).toBe('sgupta44@myseneca.ca');
  });
   test('returns "Invalid" when name = empty ', () => {
    var name = '';
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });
  test('adds @myseneca.ca to the end of name that contains spaces', () => {
    var name = '   sgupta44';
    expect(seneca.formatSenecaEmail(name)).toBe('sgupta44@myseneca.ca');
  });
  test('returns "Invalid" when name = null', () => {
    var name = null;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name = number', () => {
    var name = 1;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name = boolean', () => {
    var name = true;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  

 
});

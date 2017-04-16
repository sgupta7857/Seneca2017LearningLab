const seneca = require('./seneca');

describe('seneca.isValidEmail()', () => {
  test('isValid returns true for simple myseneca address', () => {
    const simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', () => {
    const gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a bool', () => {
    const str = true;
    expect(seneca.isValidEmail(str)).toBe(false);
  });
  test('return false for integer', () => {
    const str = 2;
    expect(seneca.isValidEmail(str)).toBe(false);
  });
 test('returns false for email containing leading whitespace', () => {

    const str = '  sgupta44@myseneca.ca';
    expect(seneca.isValidEmail(str)).toBe(false);
  });
    test('returns true for old professor email', () => {

    const str = 'david.humphrey@senecac.on.ca';
    expect(seneca.isValidEmail(str)).toBe(true);
  });

  test('returns false for null string', () => {

    const str = null;
    expect(seneca.isValidEmail(str)).toBe(false);
  });

 

  test('returns true for professor email', () => {

    const str = 'david.humphrey@senecacollege.ca';
    expect(seneca.isValidEmail(str)).toBe(true);
  });



  test('returns false for empty string', () => {
    const str = '';
    expect(seneca.isValidEmail(str)).toBe(false);
  });
});

describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    const name = 'sgupta44';
    expect(seneca.formatSenecaEmail(name)).toBe('sgupta44@myseneca.ca');
  });
   test('returns "Invalid" when name = empty ', () => {
    const name = '';
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });
  test('adds @myseneca.ca to the end of name that contains spaces', () => {
    const name = '   sgupta44';
    expect(seneca.formatSenecaEmail(name)).toBe('sgupta44@myseneca.ca');
  });
  test('returns "Invalid" when name = null', () => {
    const name = null;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name = number', () => {
    const name = 1;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name = boolean', () => {
    const name = true;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  

 
});
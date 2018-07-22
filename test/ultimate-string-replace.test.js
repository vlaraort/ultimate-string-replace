import ultimateStringReplace from '../ultimate-string-replace';
import {expect} from 'chai';

describe('string-replace', function () {
  it('should wrap case - insensitive', function () {
    const data = "Hello hello"
    const response = ultimateStringReplace(data, "he", { wrap: true, 'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
    expect(response).to.equal('<b>He</b>llo <b>he</b>llo');
  });

  it('should match if the origin string has spaces', function () {
    const data = "12 34"
    const response = ultimateStringReplace(data, "23", { wrap: true, 'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
    expect(response).to.equal('1<b>2 3</b>4');
  });

  it('should match if the origin string has accents', function () {
    const data = "Crème brûlée"
    const response = ultimateStringReplace(data, "rème brûlée", { wrap: true, 'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
    expect(response).to.equal('C<b>rème brûlée</b>');
  });

  it('should, if matcher has accents, match only the accents ', function () {
    const data = "Víctor victor Victor"
    const response = ultimateStringReplace(data, "ví", { wrap: true, 'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
    expect(response).to.equal('<b>Ví</b>ctor victor Victor');
  });

  it('should, if matcher has accents, match only the accents, but remain case-sensitive', function () {
    const data = "Víctor victor Victor"
    const response = ultimateStringReplace(data, "Ví", { wrap: true, 'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
    expect(response).to.equal('<b>Ví</b>ctor victor Victor');
  });

  it('should return false if there is no match', function () {
    const data = "Víctor victor Victor"
    const response = ultimateStringReplace(data, "no", { wrap: true, 'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
    expect(response).to.equal(false);
  });
});
define([
  'intern/chai!expect',
  'intern!bdd',
  'dist/fancy-text-fill'
], function (expect, bdd, fancyTextFill) {

  bdd.describe('textfill', function () {

    bdd.it('should fill parent element', function () {
      expect(fancyTextFill.dummy()).be.a('number').and.eql(42);
    });
  });
});
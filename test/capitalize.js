var capitalize = require('../capitalize.js');

var chai = require('chai');
var expect = chai.expect;

describe('capitalize', ()=>{
    it('should work', ()=>{
       expect(capitalize('express')).to.equal('Express');
       expect(capitalize('cats')).to.equal('Cats');
    });
});
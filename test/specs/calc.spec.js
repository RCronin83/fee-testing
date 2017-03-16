(function() {
    'use strict';
    let expect = window.chai.expect;

    describe('calc module', function(){

      describe('sum function', function(){
        it('should give the sum when provided two numbers', function(){
          let result = window.calc.sum([1,2]);
          expect(result).to.be.a('number').and.to.equal(3);
        });
        it('should handle no arguments', function(){
          let result = window.calc.sum();
          expect(result).to.equal(0);
        });
        it('should handle only 1 argument in an Array', function(){
          let result = window.calc.sum([10]);
          expect(result).to.be.a('number').and.to.equal(10);
        });
        it('should handle only 1 argument', function(){
          let result = window.calc.sum(10);
          expect(result).to.be.NaN;
        });
        it('should convert strings to numbers for addition', function(){
          let result = window.calc.sum(['5', '10']);
          expect(result).to.be.a('number').and.to.equal(15);
        });
      });


      describe('factorial function', function(){
        it('returns the factorial for the given number', function(){
          let result = window.calc.factorial(5);
          expect(result).to.be.a('number').and.to.equal(120);
        });
        it('should handle no argument', function(){
          let result = window.calc.factorial();
          expect(result).to.equal(0);
        });
        // it('should convert a string to a number for factoring', function(){
        //   let result = window.calc.factorial('five');
        //   expect(result).to.be.a('number').and.to.equal(120);
        //
        // });
      });
    });
})();

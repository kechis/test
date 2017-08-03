var assert = require("assert");
var test = require('../test1.js');

describe('tests', function(){
    describe('indexOf', function(){
        it('indexOf is a function', function(){
            assert.equal(typeof(test.indexOf),"function");            
        })

        it('should return 1', function(){            
            assert.equal(test.indexOf("abc", "b"), 1);		    
        })
        
    })
})
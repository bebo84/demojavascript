/**
 * Created by PHUONG on 10/10/2015.
 */

var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("../SuperString/StringExtend.js");
var SuperString = require("../SuperString/SuperString.js");




describe('String', function(){
    describe('reverse()', function(){
        it('reverse string "love"', function(){
            expect("love".reverse()).to.equal("evol");
        })
    }),
    describe('camelcase()', function(){
        it('camelize string "alls men are created equal"', function(){
            expect("alls men are created equal".camelcase()).to.equal("Alls Men Are Created Equal");

        });
    })
});

describe('SuperString', function()
    {
       describe('SuperString.camelcase(string)', function()
       {
           it('calmelize string "love"', function()
           {
               expect(SuperString.camelcase("love")).to.equal("Love");
           });
       })
    }
);
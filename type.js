"use strict";
exports.__esModule = true;
//exporting a module
var m1;
(function (m1) {
    //exporting a claa or any other functions or property
    var abc = /** @class */ (function () {
        function abc(name) {
            this.name = name;
        }
        return abc;
    }());
    m1.abc = abc;
    function hello(argument) {
        console.log(argument);
    }
    m1.hello = hello;
})(m1 = exports.m1 || (exports.m1 = {}));
var m2;
(function (m2) {
    var ab = new m1.abc('hghsdv');
    m1.hello(4567);
})(m2 || (m2 = {}));
function anything(argument) {
    return argument;
}
function anything1(argument) {
    // body...
    return argument;
}
//generics
function anything2(argument) {
    // body...
    return argument;
}
var myNumber = anything2(1);
var myString = anything2('nitin');
var myObject = anything2({ name: 'nitn' });
var myValue = anything2(true);
/*
steps for installing typescript

by command prompt
npm i -g typescript

for sublime
1. ctrl + shift + p, then write install and install package control
2. ctrl + shift + p, then write install and open package control, then install typescript

for compling typescript or converting typescript to javascript
1. open command prompt in the folder where your typescript file is saved
2. write tsc filename.ts || for automatically compiling typescript write tsc -w filename.ts

*/ 

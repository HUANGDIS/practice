"use strict";

var fs = reuqire('fs');
var promise = new Promise(function (resolve, reject) {
  console.log('111');
  fs.readFile('./a.txt', 'utf-8', function (err, data) {
    if (err) reject();
    resolve();
  });
});
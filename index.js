function receivesAFunction(callback) {
  return callback();
}


function returnsANamedFunction(yellow, blue) {
  return function (thing) { `${yellow} and ${blue} make green` };
}

let returnsAnAnonymousFunction = function () {
  return returnsAnAnonymousFunction();
}
angular.module("learnJS").filter("name", function () {
    return function (input) {
        console.log(input);
        return input;
    };
});
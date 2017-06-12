/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../src/js/mylib.ts" />


let __ = new MyLib()
describe("map function", () => {
    it("Creates an array of values by running each element in array thru iteratee", function () {
        let result = __.map([4, 8], x => x * x)
        expect(result).toEqual([16, 64]);
    });
    it("Creates an array of values by running each value of object in array object thru iteratee", function () {
        let result = __.map({ 'a': 4, 'b': 8 }, x => x * x)
        expect(result).toEqual([16, 64]);
    });
    it("Creates an array of values from array of object as iteratee is the key ", function () {
        let users = [
            { 'user': 'barney' },
            { 'user': 'fred' }
        ];
        let result = __.map(users, 'user')
        expect(result).toEqual(['barney', 'fred']);
    });
});


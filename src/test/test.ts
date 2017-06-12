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

describe("filter function", () => {
    let users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
    ];

    it("Iterates over elements of collection, returning an array of all elements predicate returns truthy for",
        function () {
            let result = __.filter(users, function (o) { return !o.active; })
            expect(result).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);

        });
    it("Iterates over elements of collection, returning an array of all elements match predicate",
        function () {
            let result = __.filter(users, { 'age': 36, 'active': true })
            expect(result).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
        });
    it("Iterates over elements of collection, returning an array of all elements match predicate",
        function () {
            let result = __.filter(users, ['active', false]);
            expect(result).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
        });
    it("Iterates over elements of collection, returning an array of all elements which property's value is true",
        function () {
            let result = __.filter(users, 'active');
            expect(result).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
        });
});

describe("every function", () => {
    let users = [
        { 'user': 'barney', 'age': 36, 'active': false },
        { 'user': 'fred', 'age': 40, 'active': false }
    ];

    it("returns true if all elements of the collection pass the predicate check, else false",
        function () {
            let result = __.every([true, 1, null, 'yes'], Boolean)
            expect(result).toEqual(false);
        });
    it("returns true if all the element of the collection match the iteratee",
        function () {
            let result = __.every(users, { 'user': 'barney', 'active': false })
            expect(result).toEqual(false);
        });
    it("returns true if all the element of the collection match iteratee(matchesProperty)",
        function () {
            let result = __.every(users, ['active', false]);
            expect(result).toEqual(true);
        });
    it("returns true if all the element of the collection match iteratee(property)",
        function () {
            let result = __.every(users, 'active');
            expect(result).toEqual(false);
        });
});

describe("find function", () => {
    let users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
    ];

    it("should return the first element of the collection predicate returns truthy for",
        function () {
            let result = __.find(users, function (o) { return o.age < 40; })
            expect(result).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
        });
    it("should return the first element of the collection that match the iteratee",
        function () {
            let result = __.find(users, { 'age': 1, 'active': true })
            expect(result).toEqual({ 'user': 'pebbles', 'age': 1, 'active': true });
        });
    it("should return the first element of the collection that match the iteratee(matchesProperty)",
        function () {
            let result = __.find(users, ['active', false]);
            expect(result).toEqual({ 'user': 'fred', 'age': 40, 'active': false });
        });
    it("should return the first element of the collection that match the iteratee(property)",
        function () {
            let result = __.find(users, 'active');
            expect(result).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
        });
});


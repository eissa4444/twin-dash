class MyLib {
    forEach<T>(collection: List<T> | Dictionary<T>, iteratee?: ListIterator<T, any> | any) {
        if (Array.isArray(collection)) {
            for (var index = 0; index < collection.length; index++) {
                iteratee(collection[index], index, collection)
            }
        } else if (this.isObject(collection)) {
            for (var key in collection) {
                /*to make sure that the key you get is an actual property of an object,
                 and doesn't come from the prototype:*/
                if (collection.hasOwnProperty(key)) {
                    iteratee(collection[key], key, collection)
                }
            }
        }
        return collection
    }

    forEachRight<T>(collection: List<T> | Dictionary<T>, iteratee?: ListIterator<T, any> | any) {
        if (Array.isArray(collection)) {
            for (var index = collection.length - 1; index >= 0; index--) {
                iteratee(collection[index])
            }
        } else if (this.isObject(collection)) {
            let arr: any[] = [];
            for (let key in collection) {
                if (collection.hasOwnProperty(key)) {
                    arr.push(key)
                }
            }
            for (let index = arr.length - 1; index >= 0; index--) {
                iteratee(collection[arr[index]], arr[index])
            }

        }
        return collection
    }

    every<T>(collection: List<T> | any, iteratee?: ListIterator<T, any> | any): boolean {
        if (iteratee == undefined) {
            for (let index = 0; index < collection.length; index++) {
                if (!Boolean(collection[index])) {
                    return false
                }
                return true
            }
        }
        else if (Array.isArray(collection)) {
            if (this.isFunction(iteratee)) {
                for (let index = 0; index < collection.length; index++) {
                    if (!iteratee(collection[index], index, collection)) {
                        return false
                    }
                }
                return true
            } else if (this.isObject(collection[0])) {
                //the other three cases
                if (Array.isArray(iteratee)) {
                    for (let item of collection) {
                        if (item.hasOwnProperty(iteratee[0])) {
                            if (item[iteratee[0]] == iteratee[1]) {
                                continue
                            } else {
                                return false
                            }
                        }
                        else {
                            return false
                        }
                    }
                    return true
                }
                else if (this.isObject(iteratee)) {
                    for (let item of collection) {
                        for (let key in iteratee) {
                            if (item.hasOwnProperty(key)) {
                                if (item[key] == iteratee[key]) {
                                    continue
                                } else {
                                    return false
                                }
                            } else {
                                return false
                            }
                        }
                    }
                    return true
                } else if (this.isString(iteratee)) {
                    for (let item of collection) {
                        if (item.hasOwnProperty(iteratee)) {
                            if (Boolean(item[iteratee])) {
                                continue
                            } else {
                                return false
                            }
                        } else {
                            return false
                        }
                    }
                    return true
                }
            } else {
                return undefined
            }

        }
    }

    map<T>(collection: List<T> | Dictionary<T>, iteratee?: ListIterator<T, any> | any) {
        let output: any[] = []
        if (iteratee == undefined) {
            return collection
        }
        if (this.isArray(collection) && !this.isArrayOfObjects(collection)) {
            for (var index in collection) {
                output.push(iteratee(collection[index], index, collection))
            }

        } else if (this.isArrayOfObjects(collection)) {
            for (let index in collection) {
                for (let pro in collection[index]) {
                    output.push(collection[index][pro])
                }
            }
        } else if (this.isObject(collection)) {
            for (let key in collection) {
                if (collection.hasOwnProperty(key)) {
                    output.push(iteratee(collection[key]))
                }
            }
        }
        return output
    }

    filter<T>(collection: List<T> | Dictionary<T>, iteratee?: ListIterator<T, any> | any) {
        let output: any[] = []
        if (collection == undefined) {
            return output
        } else if (iteratee == undefined) {
            if (this.isArrayOfObjects(collection)) {
                for (let index in collection) {
                    output.push(collection[index])
                }
            }
        } else if (this.isArrayOfObjects(collection)) {
            if (this.isFunction(iteratee)) {
                for (let index in collection) {
                    if (iteratee(collection[index]))
                        output.push(collection[index])
                }
            } else if (this.isObject(iteratee)) {
                for (let index in collection) {
                    if (this.hasMatches(collection[index], iteratee)) {
                        output.push(collection[index])
                    }
                }
            } else if (this.isArray(iteratee)) {
                for (let index in collection) {
                    if (collection[index][iteratee[0]] == iteratee[1]) {
                        output.push(collection[index])
                    }
                }
            } else if (this.isString(iteratee)) {
                for (let index in collection) {
                    if (Boolean(collection[index][iteratee])) {
                        output.push(collection[index])
                    }
                }
            }
        }
        return output
    }

    countby<T>(collection: Array<any>, iteratee?: ListIterator<T, any> | any): Dictionary<any> {
        let output: { key: any; value: number; } = <any>{}
        let filtered = []
        if (this.isFunction(iteratee)) {
            filtered = collection.map(iteratee)
        } else if (this.isString(iteratee)) {
            filtered = collection.map(function (word) {
                return `${word.length}`
            })
        }
        else {
            filtered = collection
        }

        filtered.forEach(function (entry) {
            output[`${entry}`] = (output[`${entry}`] || 0) + 1;
        })
        return output
    }


    private hasMatches(obj: Object, iteratee: Object): Boolean {
        for (var p in iteratee) {

            if (!obj.hasOwnProperty(p)) return false
            if (!obj.hasOwnProperty(p)) return false
            if (obj[p] !== iteratee[p]) return false
        }
        return true;
    }
    private isFunction(object: any): boolean {
        var getType = {};
        return object && getType.toString.call(object) === '[object Function]';
    }
    private isObject(object: any): boolean {
        var getType = {};
        return object && getType.toString.call(object) === '[object Object]';
    }
    private isArray(object: any): boolean {
        var getType = {};
        return object && getType.toString.call(object) === '[object Array]';
    }
    private isString(object: any): boolean {
        var getType = {};
        return object && getType.toString.call(object) === '[object String]';
    }
    private isArrayOfObjects(object: any): boolean {
        var getType = {};
        return object && getType.toString.call(object[0]) === '[object Object]';
    }
}

interface List<T> {
    [index: number]: T;
    length: number;
}
interface Dictionary<T> {
    [index: string]: T;
}
type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult;


var _a;
function getKey(k) {
    return "a key named ".concat(k);
}
var Obj = (_a = {
        id: 5,
        name: 'North Pole'
    },
    _a[getKey(true)] = true,
    _a);
console.log(Obj);

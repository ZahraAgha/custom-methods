// 3.Map və Reducer methodlarinida custom olaraq yazacaqsiz.Hazir map reducer istifade etmeden.Bu funksiyalari sifirdan siz yazacaqsiz.s

//Reduce custom


const arr = [1, 2, 3]
const allReducer = (accumalator, currentItem) => accumalator + currentItem;

const reduce = (reducer, initialValue, array) => {
    let acc = initialValue;
    for (let item in array) {
        let currentvalue = array[item];
        acc = reducer(acc, currentvalue);

    }

    return acc;
}

const result = reduce(allReducer, 0, arr);

console.log(result);

//___________________________________________________________________________


//map

const arr = [1, 2, 3]
let output = arr.mymap(function (val, index, array) {
    console.log(val, index, array);

    return val * 2;
})

output;

//_____________________________________________________________________________

// 2.Filter methodunu custom olaraq siz yazacaqsiz.

const data = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (func) {
    const filtered = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            filtered.push(this[i]);
        }
    }

    return filtered;
};

const filteredData = data.myFilter(function (digit) {
    if (digit > 2) return digit;
});


console.log(filteredData);





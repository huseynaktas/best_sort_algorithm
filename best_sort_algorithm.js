let dizi = [];
for (let i = 0; i < 10000; i++) {
    dizi.push(Math.floor(Math.random() * 10000));
}

function quicksort(dizi) {
    if (dizi.length <= 1) {
    return dizi;
    } else {
    var pivot = dizi[0];
    var solTaraf = [];
    var sagTaraf = [];
    for (var i = 1; i < dizi.length; i++) {
        if (dizi[i] < pivot) {
        solTaraf.push(dizi[i]);
        } else {
        sagTaraf.push(dizi[i]);
        }
    }
    return quicksort(solTaraf).concat(pivot, quicksort(sagTaraf));
    }
}

function bubbleSort(dizi){
 
    let myArrayLength = dizi.length;

    for(let i = 0; i < myArrayLength-1; i++){

        for(let j = 0; j < myArrayLength-i-1; j++){

            if(dizi[j] > dizi[j+1]){
                let temp = dizi[j];
                dizi[j] = dizi[j+1];
                dizi[j+1] = temp;
            }

        }
    }
            return dizi;
}

let startTime1 = performance.now();
var result1 = quicksort(dizi);
let endTime1 = performance.now();
console.log(
    "Hızlı sıralama algoritması ile sıralama",
    (endTime1 - startTime1).toFixed(4),
    "milisaniye sürdü.",result1
);

let startTime2 = performance.now();
var result2 = bubbleSort(dizi);
let endTime2 = performance.now();
console.log(
    "Kabarcık sıralama algoritması ile sıralama",
    (endTime2 - startTime2).toFixed(4),
    "milisaniye sürdü.",result2
);
function binarySearch(array, target) {
    let left = 0; 
    let right = array.length - 1; //ultimo indice del arreglo

    while (left <= right) {
        const middle = Math.floor((left + right)/2);
        const mid = array[middle];

        if (mid === target) {
            return middle;
        }else if(mid < target){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return -1
}

const numbers = [2, 3, 4, 5, 7, 10];

const resultado = binarySearch(numbers, 10)
console.log('El numero esta en la posición: ', resultado)

module.exports = function getZerosCount(number, base) {
    let getPrimeNumbers = function(num){
        let arr = [];
        outer: for (let i = 2; i < num; i++) {
            for (let j = 2; j < Math.sqrt(i); j++) {
                if (i % j == 0) continue outer;
            }
            arr.push(i);
        }
        return arr;
    }
    let primeNumbers = getPrimeNumbers(base);
    let result = 0;
    if (primeNumbers.indexOf(base)!= -1) {
        while (number > 0){
            result += Math.trunc(number / base);
            number = Math.trunc(number / base);
        }
        return result;
    }
    let getPrimeMultipliers = function(num) {
        let arr = [];
        for(let i = 0; i < primeNumbers.length; i++){
            while(true){
                if (num % primeNumbers[i] == 0){
                    arr.push(primeNumbers[i]);
                    num /= primeNumbers[i];
                }
                else break;
            }
        }
        if (num != 1) arr.push(num);
        return arr;
    }

    let baseMult = getPrimeMultipliers(base);
    baseMult.reverse();
    let max = baseMult[0];
    let count = 1;
    for(let i = 1; i < baseMult.length; i++) {
        if (baseMult[i] == max) count++;
        else break;
    }
    while (number > 0){
        result += Math.trunc(number / max);
        number = Math.trunc(number / max);
    }
    if (count == 1) return result;
    return Math.trunc(result/count);
}
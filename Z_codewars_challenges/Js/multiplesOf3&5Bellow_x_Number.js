function solution(number) {
    if (number <= 0) {
        return 0;
    }

    let totalSuma = 0;
    for (let i = 1; i < number; i++) {
        if (i%3 == 0 && i%5 == 0){
            totalSuma += i;
        }
        else if (i%3 == 0 || i%5 == 0) {
            totalSuma += i;
        }
    }
    return totalSuma;
}

console.log(solution(10));


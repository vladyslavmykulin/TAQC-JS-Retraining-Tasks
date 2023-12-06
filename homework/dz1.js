function task_1() {
    
    let dataTypes = {
        String: 'str',
        Number: 200,
        Boolean: false,
        Undefined: undefined,
        Null: null,
        Big_Int: 22n
    };
}

function task_2() {
    let secH = 60 ** 2;
    let secD = secH * 24;
    let secM = secD* 31;

    console.log("Seconds in hour: " + secH);
    console.log("Seconds in day: " + secD);
    console.log("Seconds in month: " + secM);
}

const primeNumbers = numsArr => {
    const filteredNumbers = numsArr.filter(num => {
        return (num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0 || num % 13 === 0);
    });
    return filteredNumbers;
};

const triangleArea = (a,b,c) => {
    if((a + b > c) && (b + c > a) && (a + c > b)) {
        let p = (a + c + b) / 2;
        return (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
    }
    else
        return 'Not valid data';
};

  const filterMostOftenNumber = numsArr => {
    let oftenNum, global_counter = 0, counter = 0;

    for(let num of numsArr) {
        for(let inner of numsArr) {
            if (num == inner)
                counter++;
        }

        if (counter > global_counter) {
            global_counter = counter;
            oftenNum = num;
        }

        counter = 0;
    }

    let newArr = [oftenNum];

    for(let num of numsArr) {
        if (num != oftenNum)
            newArr.push(num);
    }

    return newArr;
};

console.log("Playground 2");


const multiplier = {

    numbers: [1,2,3,4,5,6,7,8,9,10],
    num: 100000,

    multply(){
        return this.numbers.map((newNUmbers) => newNUmbers * this.num);
    }
};

console.log(multiplier.multply());



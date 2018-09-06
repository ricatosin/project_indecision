// const sqquare = (X) =>{
//     return x * x;
// };

// const arrowfun = (x) => x*x;


// console.log(arrowfun(9))
const user = {
   fullName: "Ricardo Tosin",
};



const getFirstname = (fullname) =>{
    return fullname.split(' ') [0];
}

const getFirstname1 = (fullname) => fullname.split(' ') [0];

console.log(getFirstname1(user.fullName));
console.log(getFirstname(user.fullName));
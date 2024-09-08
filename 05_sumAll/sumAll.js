const sumAll = function(alpha, omega) {

    let eatShit = omega;
    let b = Number.isInteger(alpha);
    let c = Number.isInteger(omega);

 
    if (b != true || c != true || alpha < 0) {

        eatShit = "ERROR";

    } else if (alpha > omega) {


        for (let i = alpha; i > omega; i--) {

            eatShit = eatShit + i;

        }

        
    } else
        
        
        
    {

        for (let i = alpha; i < omega; i++) {

            eatShit = eatShit + i;

        }

    }

    return eatShit;

};

// Do not edit below this line
module.exports = sumAll;

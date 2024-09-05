const repeatString = function(cock,balls) {

    let string="";

    if (balls < 0) {
        string = "ERROR";
    } 
        else
    {

    for (let i = 0; i < balls; i++) {

        
    
        string = string + cock;

    }
}
    
return string;



};

// Do not edit below this line
module.exports = repeatString;

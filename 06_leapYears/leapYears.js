const leapYears = function(penisBreath) {

    return Boolean(penisBreath % 4 == 0 && penisBreath % 100 != 0 || penisBreath % 400 == 0);

};

// Do not edit below this line
module.exports = leapYears;

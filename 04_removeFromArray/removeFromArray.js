const removeFromArray = function(fucksGiven, ...howManyFucks) {

    const fucksTaken = [];
    
    fucksGiven.forEach((fuck) => {
      
      if (!howManyFucks.includes(fuck)) {
        fucksTaken.push(fuck);
      }
    });
    
    return fucksTaken;


};

// Do not edit below this line
module.exports = removeFromArray;

const CustomError = require("../extensions/custom-error");
//++++
module.exports = function createDreamTeam(members) {
    if(!Array.isArray(members)){
        return false;
    }
    let team = '';
    let result = '';
    for (let i = 0; i < members.length; i++) {
        if( typeof members[i] === "string" ){
          members[i]= members[i].trim();
            team += members[i].charAt(0).toUpperCase();
        }

    }
    team = team.split('');
   team = team.sort();
    console.log(team);
    for (let i = 0; i < team.length; i++) {
        result += team[i];
    }
    return result;
};

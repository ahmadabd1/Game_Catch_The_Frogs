
const GameModel = function () {

    const MAX_LEVEL = 5
    let gameLevel = 1
    let frogCounterthegame = 1
    let frogcounterthelevel = 1
     
    const getFrogByLevel = function (numfrog) {
        return frogcounterthelevel
    }
    const getLevel = function(){
        return gameLevel
    }
    const nextLevel = function () {
        if (MAX_LEVEL > gameLevel) {
            gameLevel+=1
            frogcounterthelevel+=1
            frogCounterthegame=frogcounterthelevel
        } else {
            alert("Congr, You Win !! traah") 
            return 
        }
    }

    const checkFrogCounter = function () {
        if (frogCounterthegame == 0) {
            frogCounterthegame= getFrogByLevel()
            return true
        } else {
            return false
        }
    }
    const removeFrog = function () {
        frogCounterthegame-=1

    }
    const getNumberFrog = function(){
        return frogCounterthegame
    }
    return {
        nextLevel, addFrogByLevel: getFrogByLevel, checkFrogCounter, removeFrog,getNumberFrog,getLevel
    }
}



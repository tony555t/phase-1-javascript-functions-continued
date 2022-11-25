function saturdayFun(someWhere="roller-skate") {
    return `This Saturday, I want to ${someWhere}!`
    }
    saturdayFun()
     
    let mondayWork = function(willDo="go to the office"){
        return `This Monday, I will ${willDo}.` 
       }
       mondayWork()
       function wrapAdjective (type="*") {
        return function(stringOne="special"){
          return `You are ${type}${stringOne}${type}!`
        }
      }
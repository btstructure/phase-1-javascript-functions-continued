/* It should define a function
It uses a default argument, 'roller-skate' when no arguments are passed
allows the default argument to be overridden
Implement a function called mondayWork:

It should define a function
It uses a default argument, 'go to the office' when no arguments are passed
allows the default argument to be overridden

Implement a function called wrapAdjective:

It should return a function
This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.
return a String of the form "You are ..." where ... should be the adjective this function 
received wrapped in visual flair
It should take as parameter a String that will be used to create visual flair
You may call the parameter whatever you like, but its default value should be "*"
Call example: const encouragingPromptFunction = wrapAdjective("!!!")
*/


function saturdayFun(saturdayActivity = "roller-skate"){
    return `This Saturday, I want to ${saturdayActivity}!`;
};

saturdayFun();
saturdayFun("This Saturday, I want to bathe my dog!")

function mondayWork(mondayActivity = "go to the office"){
    return `This Monday, I will ${mondayActivity}.`;

}

mondayWork()
mondayWork("This Monday, I will work from home.")


function wrapAdjective(flair = "*"){
    return function (single = "special"){
        return `You are ${flair}${single}${flair}!`
    }    
}



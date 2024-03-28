
function receivesAFunction(Monday){
    Monday()
}
function returnsANamedFunction(){
    return function named(){
        console.log("I hate Mondays")
    };
}
function returnsAnAnonymousFunction(){
    return function(){}
}
module.exports = function acceptableSequence(str) {
    //console.log(str);
    const letters = "abcdefghijklmnopqurtuvwxyz";
   var check = letters.indexOf("a", "b", "c");
   //console.log(check);
    for (var i = 0; i < str.length; i++ ) {
        console.log('str[i]', str[i]);

        if (letters.indexOf(str[i]) !== -1) {
            if (str[i-1] !== "+" || str[i+1] !== "+") {
                return false;
            }
        }
    }    
    return true;

        
}
// /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

function StingChallenge(str) {
    var regexPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,31})");
    if(str.length > 7 && str.length < 31 && regexPattern.test(str))
        return true;
    else return false;
}

console.log(StingChallenge('passWord@123')); // ["Hello", "World"]
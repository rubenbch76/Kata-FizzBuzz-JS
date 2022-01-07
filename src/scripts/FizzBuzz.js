export function fizzBuzz(numb){
    
    if ((numb % 5 == 0 && numb % 3 == 0)){
        return "FizzBuzz";
    }
    
    if (numb % 3 == 0 || numb.toString().match(/[3]/g)){
        return "Fizz";
    }
    
    if (numb % 5 == 0 || numb.toString().match(/[5]/g)){
        return "Buzz";
    }
    
    return numb;
}

function listNumbers(){

    let i;

    for(i=1; i<=100 ; i++){
        document.getElementById("listSpace").innerHTML += "<p>" + fizzBuzz(i) + " [" + i + "]" + "</p>";
    }

}

/* listNumbers(); */
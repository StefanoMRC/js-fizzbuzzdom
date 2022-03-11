for (let i = 1; i < 100; i++){
    
    if(i % 3 == 0 && i % 5==0){
        document.getElementById("contNumeri").innerHTML+= `<div class="d-flex align-items-center justify-content-center size p-2 m-1 bg_fizzbuzz">FizzBuzz</div>`
    } 
    else if(i % 5 ==0){
        document.getElementById("contNumeri").innerHTML+= `<div class="d-flex align-items-center justify-content-center size p-2 m-1 bg_buzz">Buzz</div>`
    }
    else if(i % 3 == 0){
         document.getElementById("contNumeri").innerHTML+= `<div class="d-flex align-items-center justify-content-center size p-2 m-1 bg_fizz">Fizz</div>`
    }
    else if (i % 3 >= 1 && i % 5>=1 ){
        document.getElementById("contNumeri").innerHTML+= `<div class="d-flex align-items-center justify-content-center size p-2 m-1 bg_pers">${i}</div>`
    }
}
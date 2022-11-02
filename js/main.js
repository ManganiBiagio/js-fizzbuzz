const boxSquareEl = document.querySelector(".box-quadrati");


for (let i = 1; i <= 100; i++) {
    if((i % 3===0) && (i % 5===0)){
        console.log("FizzBuzz");
        boxSquareEl.innerHTML += `<div class="my-square red"> FizzBuzz </div>`;
    }
    else if(i % 3===0){
        console.log("Fizz");
            boxSquareEl.innerHTML += `<div class="my-square green"> Fizz </div>`

    }
    else if(i % 5===0){
         console.log("Buzz");
         boxSquareEl.innerHTML += `<div class="my-square yellow"> Buzz </div>`

    }
    else{
        console.log(i);
        boxSquareEl.innerHTML += `<div class="my-square blu"> ${i} </div>`
    }

    // if(i % 3===0){
    //     if(i % 5===0){
    //         console.log("FizzBuzz");
    //         boxSquareEl.innerHTML += `<div class="my-square red"> FizzBuzz </div>`
    //     }
    //     else{
    //         console.log("Fizz");
    //         boxSquareEl.innerHTML += `<div class="my-square green"> Fizz </div>`
    //     }
    // }
    // else if(i % 5===0){
    //      console.log("Buzz");
    //      boxSquareEl.innerHTML += `<div class="my-square yellow"> Buzz </div>`

    // }
    // else{
    //     console.log(i);
    //     boxSquareEl.innerHTML += `<div class="my-square blu"> ${i} </div>`
    // }


    // ----------------------NON FUNZIONA----------------------------
    // switch (i) {
        
    //     case (i % 3 ===0) :
    //         console.log("Fizz");
    //         boxSquareEl.innerHTML += `<div class="my-square green"> Fizz </div>`;
    //         break;
    //     case (i % 5 === 0):
    //         console.log("Buzz");
    //         boxSquareEl.innerHTML += `<div class="my-square yellow"> Buzz </div>`;
    //         break;
    //     case ((i % 3 === 0)&&(i % 5 === 0)):
    //         console.log("FizzBuzz");
    //         boxSquareEl.innerHTML += `<div class="my-square red"> FizzBuzz </div>`;
    //         break;
    //     default:
    //         console.log(i);
    //         boxSquareEl.innerHTML += `<div class="my-square blu"> ${i} </div>`  ;
            


    // }
    // --------------------------------------------------

}
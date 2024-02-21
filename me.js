let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let winner = document.querySelector("p");
let newGame = document.querySelector("#newBtn")

let turn0 = true;


const boxNum = [  [0,0,0],
            [0,0,0],
            [0,0,0]
        ]

const win = [
            [0, 1, 2],  // First row
            [3, 4, 5],  // Second row
            [6, 7, 8],  // Third row
            [0, 3, 6],  // First column
            [1, 4, 7],  // Second column
            [2, 5, 8],  // Third column
            [0, 4, 8],  // Diagonal from top-left to bottom-right
            [2, 4, 6]   // Diagonal from top-right to bottom-left
        ];

// const win = [
//         [0,1,2],
//         [0,5,9],
//         [1,4,7],
//         [4,5,6],
//         [7,8,9],
//         [3,5,7],
//         [3,6,9],
//         [2,5,7]
//       ]

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if (turn0){
            box.innerText = "o";
            turn0 = false;
        }else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        checkWin();

    });
});

const disableBtn = () => {
    for (box of boxes){
        box.disabled = true;
    }
} 

const enableBtn = () => {
    for (box of boxes){
        box.disabled = false;
    }
} 

const resetgame = () =>{
    turn0 = true;
    enableBtn();
    for (box of boxes){
        box.innerText = "";
    }
    winner.innerText = "";
    newGame.classList.add("hide");
}

const checkWin = () => {
        for (let patten of win){
           
               let box1 = boxes[patten[0]].innerText; 
               let box2 = boxes[patten[1]].innerText;
               let box3 = boxes[patten[2]].innerText;
            
               if (box1 != "" && box2 != "" && box3 != ""){
                if (box1 == box2 && box2 == box3){
                    winner.innerText = `Winner is ${box1}`;
                    disableBtn();
                    newGame.classList.remove("hide");
                }
               }
        }
};

resetBtn.addEventListener("click", resetgame);
newGame.addEventListener("click", resetgame);
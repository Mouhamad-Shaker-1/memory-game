let emoji = ['🤣','😉','😜','😊','🤣','😉','😜','😊'];

let backCards = document.querySelectorAll('.flip-card-back');
let cards = document.querySelectorAll('.flip-card');
let start = document.getElementById('start');
let inners = document.querySelectorAll('.flip-card-inner');
let info = document.querySelector(".info");

start.onclick = startGame;

function startGame(){

    shuffleCard();
    setTimeout(() => {
        inners.forEach(function(inner){
            inner.style.transform = "rotateY(180deg)";
        })   
    }, 500);

    setTimeout(function(){
        inners.forEach(function(inner){
            inner.style.transform = "rotate(0deg)";
        })        
    }, 1000)
    start.textContent = 'strat again'
    info.innerHTML = `<p>the score is 0</p>`;

    let index;
    let list = [];
    let score = 0;
    let check = [];

    for(let i = 0; i < cards.length;i++){

        cards[i].onclick = function(){

            if(i != index){

                index = i;
                let x = backCards[i].innerHTML;
                inners[i].style.transform = "rotateY(180deg)";
                if(list.includes(x)){

                    list.pop();
                    check = [];
                    score += 1;

                }else{

                    list.push(x);
                    check.push(inners[i]);

                }
                
                if(list.length >= 2){

                    list = [];
                    score -= 1;

                    setTimeout(function(){

                    for(let i = 0;i < check.length;i++){

                        check[i].style.transform = "rotateY(0deg)"
                    }
                    check = [];
                    },1000)
            }; 

            if(score < 0){
                score = 0;
            }

            info.innerHTML = `<p>the score is ${score}</p>`;  
              
        }

    }

}




function shuffleCard(){
    emoji = shuffleArry(emoji);
    for(let i = 0;i < 8;i++){
        backCards[i].innerHTML = emoji[i];
    }
}

function shuffleArry(arry){
    for(let i = arry.length-1; i > 0; i--){
        const rannum = Math.floor(Math.random() * (i + 1));
        const temp = arry[i];
        arry[i] = arry[rannum];
        arry[rannum] = temp;
    }
    return arry;
}
}
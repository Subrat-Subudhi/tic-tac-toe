const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let arr = new Array(9).fill('E');
function checkWinner(){
    // for(let i = 0 ; i<winner.length ; i++){
    //     if(arr[winner[i][0]]!='E'&&arr[winner[i][0]]==arr[winner[i][1]]&&arr[winner[i][1]]==arr[winner[i][2]]){
    //         return 1;
    //      }
    // }
    // return 0;

    for(let [i1 , i2 , i3] of winner){
        if(arr[i1]!='E' && arr[i1]==arr[i2] && arr[i2]==arr[i3]){
            return 1;
        }
        
    }return 0;
}
let turn = 'X';
let cnt = 0;
const tictactoe = (event)=>{
    if(arr[event.target.id]=='E'){
        cnt++;
        if(turn==='X'){
            const element = document.getElementById(event.target.id);
            element.innerHTML = 'X';
            arr[event.target.id] = 'X';
            if(checkWinner()){
                document.getElementById('wm').innerHTML = "winner X";
                board.removeEventListener('click' , tictactoe);
                return;
            }
            turn = 'O';
        }
        else{
            const element = document.getElementById(event.target.id);
            element.innerHTML = 'O';
            arr[event.target.id] = 'O';
            if(checkWinner()){
                document.getElementById('wm').innerHTML = "winner O";
                board.removeEventListener('click' , tictactoe);
                return;
            }
            turn = 'X';
        }
        if(cnt==9){
            document.getElementById('wm').innerHTML = "Match Draw";
            board.removeEventListener('click' , tictactoe);
            return;
        }
    }
}

const board = document.querySelector('.board');
board.addEventListener('click' , tictactoe)

const restart = document.getElementById('restart');
restart.addEventListener('click' , ()=>{
    board.addEventListener('click' , tictactoe);
    for(let i = 0 ; i<9 ; i++){
        arr[i] = 'E';
        document.getElementById(i).innerHTML = "";
    }
    cnt = 0;
    document.getElementById('wm').innerHTML = "";
    turn = 'X';

})
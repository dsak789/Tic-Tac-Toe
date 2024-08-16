var rst=document.getElementById("rsrt");
var count=0
var cells = []

for(var i = 1; i<=9; i++){
    cells.push(document.getElementById('c'+i))
}


function C(btn_Id){
    if(count%2==0){
        btn_Id.src="tttX.jpg";
    }
    else{
        btn_Id.src="tttO.jpg";
    }
    btn_Id.onclick=null;
    btn_Id.style.cursor="not-allowed";
    count++;
    checkwin()
    
}
function start() {
    cells.forEach(function(cell) {
        cell.src = "smile.jpg";
        cell.onclick = function() { C(cell); };
        cell.style.cursor = "pointer";
    });

    rst.innerHTML = (rst.innerHTML == "Start") ? "Restart" : "Start";
    count = 0;
}
function checkwin(){    
    var winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for(var i=0; i < winPatterns.length; i++){
        var [a,b,c] = winPatterns[i]
        if(cells[a].src === cells[b].src && cells[a].src === cells[c].src && cells[a].src.includes('ttt')){
           if(cells[a].src.includes('tttX')){
            alert("Player X won the Match")
        }
        else if(cells[a].src.includes('tttO')){
            alert("Player O won the Match")
        }
        if(confirm("Restart the Game")){
            start()
            window.location.href = "./"
        }
        }
        
    rst.innerHTML = "Restart";
    }
    if(count === 9){
        alert("Draw Match")
    }

}







var gameMarker = "X"; 

function changeMarkerToX(){
  gameMarker = "HI";
  console.log(gameMarker);
    

}

function changeMarkerToO(){
    gameMarker = "O";
    console.log(gameMarker);
    
}


function placeMark (sam) {
    
    var cell = document.getElementById(sam)
    // console.log(cell,"id:" , id)
    cell.innerHTML = gameMarker;


}

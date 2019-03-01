

var gameMarker = "X"; 

function changeMarkerToX(){
  gameMarker = "X";
  console.log(gameMarker);
    

}

function changeMarkerToO(){
    gameMarker = "O";
    console.log(gameMarker);
    
}

function placeMark (id) {
    
    var cell = document.getElementById(id)
    // console.log(cell,"id:" , id)
    cell.innerHTML = gameMarker;


}

var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

         // 1     2   3   4   5 6   7   8     9  10   11  12  13  14  15 16 17  18  19 20  21  22   23 24   25  26 27   28 

function up() {
   if (map[player.mapY-1][player.mapX].canPass){
     player.mapY--;
   }
}

function down() {
   if (map[player.mapY+1][player.mapX].canPass){
     player.mapY++;
   }
}


function left() {
   if (map[player.mapY][player.mapX-1].canPass){
     player.mapX--;
   }
}

function right() {
   if (map[player.mapY][player.mapX+1].canPass){
     player.mapX++;
   }
}

function arrows() {
   thingie = '<button onclick="up()">⇑</button><br>';
   thingie += '<button onclick="left()">⇐</button> ';
   thingie += '<button onclick="right()">⇒</button><br>';
   thingie += '<button onclick="down()">⇒</button>';
   sumbit.innerHTML = thingie;
}



function start() {
  text.innerHTML = 'In the year 201X ...';
  arrows();
}

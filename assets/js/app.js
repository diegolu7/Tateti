$(document).ready(function(){
  console.log("cargado...");

  let turno = 0;
  let tablero = [];
  let player_x = prompt("Nombre de Jugador X:", "Jugador X"); // par
  let player_o = prompt("Nombre de Jugador O:", "Jugador O"); // impar
  player_x = (player_x == "") ? "Jugador X" : player_x;
  player_o = (player_o == "") ? "Jugador O" : player_o;
  init_tablero();
  $('#title-turn').text(turno % 2 == 0? player_x : player_o);

  $('.item').click(function(){
    let ficha = $(this).find('.ficha');
    let coord = $(this).data('coord').split(",");
        
    if(ficha.text() == ""){
      if(turno % 2 == 0){
        tablero[coord[0]][coord[1]] = "X";
      }else{
        tablero[coord[0]][coord[1]] = "O";
      }
      console.log(tablero);
      dibujar_tablero();

      if( check_win() ){
        if(turno % 2 == 0){
        alert("Ganó " + player_x );
        }else{ alert("Ganó " + player_o );

         }
        
      }else{
        if(turno == 8){
          alert("empate");
        }
      }
      turno++;
      $('#title-turn').text(turno % 2 == 0? player_x : player_o);
    }
  });

  $('#btn-reset-game').click(function(){
    init_tablero();
    $('.item > span.ficha').fadeOut(2000, dibujar_tablero);
    //dibujar_tablero();
    turno = 0;
  });

  function check_win(){
    //FILAS
    if( tablero[0][0] == tablero[0][1] && tablero[0][1] == tablero[0][2] && tablero[0][0] != ""){
      return true;
    }
    if( tablero[1][0] == tablero[1][1] && tablero[1][1] == tablero[1][2] && tablero[1][0] != ""){
      return true;
    }
    if( tablero[2][0] == tablero[2][1] && tablero[2][1] == tablero[2][2] && tablero[2][0] != ""){
      return true;
    }
    //COLUMNAS
    if( tablero[0][0] == tablero[1][0] && tablero[1][0] == tablero[2][0] && tablero[0][0] != ""){
      return true;
    }
    if( tablero[0][1] == tablero[1][1] && tablero[1][1] == tablero[2][1] && tablero[0][1] != ""){
      return true;
    }
    if( tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][2] && tablero[0][2] != ""){
      return true;
    }
    //DIAGONALES
        if( tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2] && tablero[1][1] != ""){
      return true;
    }
    if( tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0] && tablero[1][1] != ""){
      return true;
    }
    return false;
  }
  
  function dibujar_tablero(){
    $('#title-turn').text(turno % 2 == 0? player_x : player_o);
    $('.item > span.ficha').text("");
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let selector = '.item[data-coord="' + i + ',' + j + '"]';
        $(selector).find('.ficha').text( tablero[i][j] );
      }
    }
    $('.item > span.ficha').fadeIn();

  }

  function init_tablero(){
    tablero[0] = ["", "", ""];
    tablero[1] = ["", "", ""];
    tablero[2] = ["", "", ""];
  }
});
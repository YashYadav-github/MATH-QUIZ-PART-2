function add_player(){
    var player1_name = document.getElementById("player_one_name_input").value;
    var player2_name = document.getElementById("player_two_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "game_page.html";
}
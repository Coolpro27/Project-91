player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn -"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn -"+player2_name;

function send(){
    n1=document.getElementById("number1").value;
    n1=document.getElementById("number2").value;
    actualanswer=parseInt(n1)*parseInt(n2);
    questionnumber="<h4>"+n1+"x"+n2+"</h4>";
    input_box="<br> answer:<input id='input_check_box'type='number'>";
    check_button="<br> <br> <button class='btn btn-info'onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

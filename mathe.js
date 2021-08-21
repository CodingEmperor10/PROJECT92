Mathematician_1_Name=localStorage.getItem("Mathematician_1_Name"); 
Mathematician_2_Name=localStorage.getItem("Mathematician_2_Name"); 
Mathematician1_score= 0; 
Mathematician2_score= 0;

document.getElementById("Mathematician_1_Name").innerHTML = Mathematician_1_Name + " : ";
document.getElementById("Mathematician_2_Name").innerHTML = Mathematician_2_Name + " : ";

document.getElementById("Mathematician1_score").innerHTML = Mathematician1_score;
document.getElementById("Mathematician2_score").innerHTML = Mathematician2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + Mathematician_1_Name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + Mathematician_2_Name;


function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
input_box = "<br> Answer : <input type='text' id='input_check_box'>";
check_button  = "<br><br><button class='btn btn-info' onclick='check()'> Check It! </button> ";  
 row = question_number + input_box + check_button;
 document.getElementById("output").innerHTML = row;
 document.getElementById("number1").value = "";
 document.getElementById("number2").value = "";
}
Question_turn = "mathematician1";
Answer_turn = "mathematician2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    
     if(get_answer == actual_answer){
    
         if( Answer_turn == "mathematician1"){
            Mathematician1_score = Mathematician1_score + 1;
        document.getElementById("Mathematician1_score").innerHTML = Mathematician1_score;
         }
        else{
            Mathematician2_score = Mathematician2_score + 1;
        document.getElementById("Mathematician2_score").innerHTML = Mathematician2_score;
        }
     }
    
     if( Question_turn == "mathematician1"){
    Question_turn = "mathematician2";
    document.getElementById("player_question").innerHTML = "Question Turn OF -" + Mathematician_2_Name;
     }
    else{
    Question_turn = "mathematician1";
        document.getElementById("player_question").innerHTML = "Question Turn OF -" + Mathematician_1_Name; 
    }

    if( Answer_turn == "mathematician1"){
        Answer_turn = "mathematician2";
        document.getElementById("player_answer").innerHTML = "Answer Turn OF -" + Mathematician_2_Name;
         }
        else{
        Answer_turn = "mathematician1";
            document.getElementById("player_answer").innerHTML = "Answer Turn OF -" + Mathematician_1_Name; 
        }
        
    document.getElementById("output").innerHTML = "";    
    



}









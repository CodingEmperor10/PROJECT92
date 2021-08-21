function addPlayer(){
    Mathematician_1_Name = document.getElementById("mathematcian 1_name_input").value;
    Mathematician_2_Name = document.getElementById("mathematcian 2_name_input").value;

localStorage.setItem("Mathematician_1_Name", Mathematician_1_Name);
localStorage.setItem("Mathematician_2_Name", Mathematician_2_Name);

    window.location = "mathe.html.html";
}
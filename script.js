


document.getElementById("submitButton").onclick = function(){
    let input = document.createElement("li");
    let textbox = document.createTextNode(String(document.getElementById("textbox").value));
    input.appendChild(textbox);
    document.getElementById("codingList").appendChild(input);
    console.log(input);
}
console.log(`stop digging around in here`);



document.getElementById("submitButton").onclick = function(){
    const listObject = document.createElement("li");
    listObject.textContent = document.getElementById("textbox").value;
}
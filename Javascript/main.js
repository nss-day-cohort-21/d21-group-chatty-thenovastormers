//First half of the requirements for the assignment*********/

let darkTheme = document.getElementById("checkbox1");
let largeText = document.getElementById("checkbox2");
let bodyBG = document.getElementById("bodyBG");
let input = document.getElementById("inputField");


darkTheme.addEventListener("change", function (){
    bodyBG.classList.toggle("darkT");
});

largeText.addEventListener("change", function(){
    bodyBG.classList.toggle("largeT");
});




input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        document.getElementById("output").innerHTML = /*`${chatty}`*/  "test";
    }
});


//**********************************************************/

//                  Actual IIFE files

//**********************************************************/



        // Name all of the variables here
{   
    var chatty = {};
    var output = document.getElementById("output");
    var message = createElement("<p>");
    message.innerHTML = "cats";
    output.append(message);
    output.remove(message);
}




// {
//     let JSONfiles = [];

//     jason.getJSONfiles = () => {
//         return JSONfiles;
//     }

//     jason.addKind = (whatKind) => {
//         JSONfiles.push(whatKind)
//     }



// }




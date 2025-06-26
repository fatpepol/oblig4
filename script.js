
//Gjøremåls liste knapp og input greier

const sendButton = document.querySelector('#sendButton');
console.log(sendButton);

sendButton.addEventListener("click",function (e){
  e.preventDefault();
  //Hent
  const gjøremålInput = document.querySelector("#gjøremålInput");
  const displayDiv = document.querySelector("#displayInput");
  console.log(gjøremålInput, displayDiv);

  //Modifiser
  const gjøremålValue = gjøremålInput.value;
  const container = document.createElement("div");
  const displayP = document.createElement("p");
  const removeButton = document.createElement("button");
  container.className = "container";
  removeButton.textContent = "X";
  displayP.textContent = gjøremålValue;
  console.log(gjøremålValue,displayP);


  //Send
  container.appendChild(displayP);
  container.appendChild(removeButton);
  displayDiv.appendChild(container);
  removeButton.addEventListener("click",function(e){
    displayDiv.removeChild(container);
  })

})

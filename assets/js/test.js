function allowDrop(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  console.log(event.target);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

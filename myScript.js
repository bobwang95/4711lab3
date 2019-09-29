addArtist(
  "Ken Smith",
  "BCIT Student",
  "https://randomuser.me/api/portraits/med/men/1.jpg"
);
addArtist(
  "Jenny",
  "Amazon SDE",
  "https://randomuser.me/api/portraits/med/women/1.jpg"
);

function myFunction() {
  var x = document.getElementById("newform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    let name = document.getElementById("name");
    let description = document.getElementById("description");
    let picture = document.getElementById("picture");

    name.value = "";
    description.value = "";
    picture.value = "";

    x.style.display = "none";
  }
}
function add() {
  let name = document.getElementById("name");
  let description = document.getElementById("description");
  let picture = document.getElementById("picture");
  if (name.value != "" && description.value != "" && picture.value != "") {
    addArtist(name.value, description.value, picture.value);
    name.value = "";
    description.value = "";
    picture.value = "";
  }
}
function addArtist(name, description, picture) {
  let form = document.getElementById("list");

  let mydiv = document.createElement("div");
  mydiv.className = "people";

  let myimg = document.createElement("img");
  myimg.className = "pic1";
  myimg.src = picture;

  let myname = document.createElement("p");
  myname.className = "name";
  let namenode = document.createTextNode(name);
  myname.appendChild(namenode);

  let mydetail = document.createElement("p");
  mydetail.className = "detial";
  let detailnode = document.createTextNode(description);
  mydetail.appendChild(detailnode);
  let myTextdiv = document.createElement("div");
  myTextdiv.className = "info";
  myTextdiv.appendChild(myname);
  myTextdiv.appendChild(mydetail);
  let delBtn = document.createElement("Button");
  delBtn.textContent = "Delete";
  delBtn.className = "delButton";
  delBtn.addEventListener("click", function() {
    this.parentNode.remove();
  });
  mydiv.appendChild(myimg);
  mydiv.appendChild(myTextdiv);
  mydiv.appendChild(delBtn);
  form.appendChild(mydiv);
}

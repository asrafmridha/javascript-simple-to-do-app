let Name = document.getElementById("name").value;
var id = document.getElementById("id").value;
var department = document.getElementById("department").value;
var gpa = document.getElementById("gpa").value;

function validate() {
  if (Name == "") {
    alert("please give a name First!");
  } else if (id == "") {
    alert("please give a Id First!");
  } else if (department == "") {
    alert("please give a Department First!");
  } else if (gpa == "") {
    alert("please give gpa First!");
  } else {
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.innerText = Name;

    // for id
    var td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.innerHTML = id;

    //    for Dept
    var td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerHTML = department;

    //    for gpa
    var td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.innerHTML = gpa;
  }
}

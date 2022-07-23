
var _name= document.getElementById("name").value;
var _id=document.getElementById("id").value;
var _department=document.getElementById("department").value;
var _gpa=document.getElementById("gpa").value;

 function validate() { 

    if(_name== ""){

        alert("please give a name First!");
      }
      else if( _id==""){
        alert("please give a Id First!");
    
      }
      else if(_department== ""){
        alert("please give a Department First!");
      }
      else if(_gpa== ""){
        alert("please give gpa First!");
      }
  }



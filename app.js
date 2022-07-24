
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
      else{

        var _tbody=document.getElementById("tbody");
        
        var _tr= document.createElement("tr");
        var _td= document.createElement("td");
        _tbody.appendChild(_tr);
        _tr.appendChild(_td);

        _td.innerText=_name;

        // for id 

       var _td1= document.createElement("td");
       _tr.appendChild(_td1);
       _td1.innerHTML=_id;

    //    for Dept 

    var _td2= document.createElement("td");
       _tr.appendChild(_td2);
       _td2.innerHTML=_department;

    //    for gpa 

    
    var _td3= document.createElement("td");
       _tr.appendChild(_td3);
       _td3.innerHTML=_gpa;

    
     


      }
  }





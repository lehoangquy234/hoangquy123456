
  import {addUser, getUsers} from "./storage/firestore"

function addRows(user){ 
  var table = document.getElementById('table-user');
  var rowCount = table.rows.length;
  var cellCount = table.rows[0].cells.length; 
  var row = table.insertRow(rowCount);
  for(var i =0; i < cellCount; i++){
    var cell = 'cell'+i;
    cell = row.insertCell(i);
    cell.innerHTML=user.FirstName;
  if(i =1)
  {
    cell=row.insertCell(i);
    cell.innerHTML=user.LastName;
  }

    
    
       
   
  }
}

async function init(){
  document.querySelector(".submit-user").addEventListener("click", function() {
    const user = {
        firstName: document.getElementById('Firstnames').value,
        lastName: document.getElementById('Lastnames').value
    }

    addUser(user);
  })

  const users = await getUsers();
  for(let i=0; i < users.length; i++)
  {
      addRows(users[i]);
  }
}

init();







    

//     // hẻeeeeee
//     //alert(1)
// });
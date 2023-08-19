
  import {addUser, getUsers} from "./storage/firestore"

function addRows(user){ 
  var table = document.getElementById('table-user');
  var rowCount = table.rows.length;
  var cellCount = table.rows[0].cells.length; 
  var row = table.insertRow(rowCount);

  for (let i = 0; i < cellCount; i++) {
    const cell = row.insertCell(i);

    if (i === 0) {
      cell.innerHTML = user.FirstName;
    }
    else if (i === 1) {
      cell.innerHTML = user.LastName;
    }
    else if (i === 2) {
      cell.innerHTML = `<button type="button" class="btn btn-primary submit-user">DELETE</button>`;
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
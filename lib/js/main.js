const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let db = firebase.database().ref(); //establish a reference to the root of our database

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    //organized to your scheme (structure) in an object
    let value = {
        //make 2 columns
        NAME: username,
        MESSAGE: message
    }

    //make a row
    db.push(value);

}

// Set database "child_added" event listener here
db.on("child_added", addMessageToBoard)
//.on is an event listener that listens to when data is added
//READ INFORMATION from my database

function addMessageToBoard(rowData){ // callback funtion
    //use information from data base

    let row = rowData.val();
    console.log(row);

    //make a reference to the container
    let messageContainer = document.querySelector(".allMessages");
    let p = document.createElement('p')
    p.innerText = row.NAME + ": " + row.MESSAGE;
    messageContainer.appendChild(p)



}
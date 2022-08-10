
const database = firebase.database().ref();

const allMessages = document.getElementById("all-messages");
const usernameInput = document.getElementById("username")
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
const returnButton = document.getElementById("return");

sendButton.onclick = updateDB;



function updateDB(event) {
    //Prevent page refresh
    event.preventDefault();

    //Create an object with the data we want to add 
    //to our databse
    const row = {
        USERNAME: usernameInput.value,
        MESSAGE: messageInput.value
    };

    database.push(row);
}

//Called one time for each row in databse on page load
database.on("child_added", addMessage)


function addMessage(rowData) {
    const messageObject = rowData.val();

    console.log(messageObject);



    let messageDiv = makeSingleMessageHTML(messageObject.USERNAME, messageObject.MESSAGE);

    allMessages.appendChild(messageDiv)
}

function makeSingleMessageHTML(usernameText, messageText) {
    // create a parent div to hold the entire username + message line
    let parentDiv = document.createElement("div");
    // for styling
    parentDiv.classList.add("single-message");

    let usernameDisplay = document.createElement("p");
    usernameDisplay.classList.add("single-message-username");
    // update the inner HTML to include the username
    usernameDisplay.innerHTML = usernameText + ":";
    // put the username display inside of the parent div
    parentDiv.appendChild(usernameDisplay);

    // create box for message text
    let messageDisplay = document.createElement("p");
    messageDisplay.innerHTML = messageText;
    parentDiv.appendChild(messageDisplay);

    // Return the entire username+message HTML
    return parentDiv;
}


returnButton.onclick = function (){
      window.location.href = "index.html";
    }; 


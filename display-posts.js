
const database = firebase.database().ref();

const allMessages = document.getElementById("all-messages");
const usernameInput = document.getElementById("username")
const messageInput = document.getElementById("message");


function updateDB(event) {
    event.preventDefault();

   
    const row = {
        USERNAME: usernameInput.value,
        MESSAGE: messageInput.value
    };

    database.push(row);
}

database.on("child_added", addMessage)


function addMessage(rowData) {
    const messageObject = rowData.val();

    console.log(messageObject);



    let messageDiv = makeSingleMessageHTML(messageObject.USERNAME, messageObject.MESSAGE);

    allMessages.appendChild(messageDiv)
}

function makeSingleMessageHTML(usernameText, messageText) {
    let parentDiv = document.createElement("div");
    
    parentDiv.classList.add("single-message");

    let usernameDisplay = document.createElement("p");
    
    usernameDisplay.classList.add("single-message-username");
    
    usernameDisplay.innerHTML = usernameText + ":";
    
    parentDiv.appendChild(usernameDisplay);

    let messageDisplay = document.createElement("p");
    messageDisplay.innerHTML = messageText;
    parentDiv.appendChild(messageDisplay);

    return parentDiv;
}

const button1 = document.getElementById("return2")

button1.onclick = function change_page() {

    window.location.replace("createBlog.html");
    
    window.location.href = "createBlog.html";
}; 

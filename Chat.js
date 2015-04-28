$(document).ready(function() {
    getMessages();
});

function sendMessage(){
	var MESSAGE_CHARACTER_MINIMUM = 1;
	var MESSAGE_CHARACTER_LIMIT = 512;
	
	var chat_window = document.getElementById("chat_window");
	var message_window = document.getElementById("message_window");
	
	var user_message = message_window.value;
	var current_username = "";
	var isSignedIn = false;
	if(docCookies.hasItem("username")){
		current_username = docCookies.getItem("username");
		isSignedIn = true;
	}else{
		current_username = "anonymous";
	}
	
	/*
	* Check that message does not go above character limit
	*/
	if(user_message.length >= MESSAGE_CHARACTER_LIMIT){
		alert("Failed to send message - must be less than "+MESSAGE_CHARACTER_LIMIT+" characters (your message is "+user_message.length+" characters)");
	}else if(user_message.length < MESSAGE_CHARACTER_MINIMUM){
		alert("Failed to send message - must be more than "+(MESSAGE_CHARACTER_MINIMUM - 1)+" characters (your message is "+user_message.length+" characters)");
	}else{
	    // Update the number of messages sent by this user
		if(isSignedIn){
			updateStats(current_username, "messages_sent");
		}else{
		    updateCookieStats("messages_sent");
		}
		
		message_window.value = "";
	    // Now format the message
		var complete_message = "<" + current_username + ">: " + user_message;
		addPost(complete_message, true);
		$.post("PostMessage.php", {message: complete_message, username: current_username}, function(data){
            console.log("Returned: " + data);
        });
	}
}

function addPost(message, willScroll){
	var chat_window = document.getElementById("chat_window");
	var message_window = document.getElementById("message_window");
	
	node = document.createElement("DIV");
	textnode = document.createTextNode(message);
	node.className = "chat_message";
	node.appendChild(textnode);
	chat_window.appendChild(node);
	if(willScroll) message_window.scrollIntoView();
}

function clearChatWindow(){
	var chat_window = document.getElementById("chat_window");
	dojo.empty(chat_window);
	/*
	var messages = chat_window.childNodes;
	var message_count = messages.length;
	console.log("No of messages: " + message_count);
	
	for(i = 0; i < message_count; i++){
		console.log("Clearing message #" + i);
		chat_window.removeChild(messages[i]);
	}
	*/
}

function getMessages(){
	var chat_window = document.getElementById("chat_window");
	var message_window = document.getElementById("message_window");
	
    $.post("GetMessages.php", function(data){
        console.log("Returned: " + data);
		var messages = JSON.parse(data).messages;
		console.log("There are "+messages.length+" messages in the parsed data");
		for(i = 0; i < messages.length; i++){
			console.log("Message #"+i+": " + messages[i])
			addPost(messages[i], false);
		}
    });
	
	message_window.scrollIntoView();
}

setInterval(function(){ 
	clearChatWindow(); 
	getMessages();
}, 5000);

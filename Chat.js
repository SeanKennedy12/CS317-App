$(document).ready(function() {
    var chat_window = document.getElementById("chat_window");
	var message_window = document.getElementById("message_window");
	
    $.post("GetMessages.php", function(data){
        console.log("Returned: " + data);
		var messages = JSON.parse(data).messages;
		console.log("There are "+messages.length+" messages in the parsed data");
		for(i = 0; i < messages.length; i++){
			console.log("Message #"+i+": " + messages[i])
			addPost(messages[i]);
		}
    });
	
	message_window.scrollIntoView();
});

/*
$("message_window").keypress(function(e){
console.log("Key pressed!");
 var key = e.which;
 if(key == 13){  // the enter key code
	console.log("Enterkey pressed!");
    $('post_message').click();
    return false;  
  }
}); 
*/ 

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
		message_window.value = "";
	    // Now format the message
		var complete_message = "<" + current_username + ">: " + user_message;
		addPost(complete_message);
		$.post("PostMessage.php", {message: complete_message, username: current_username}, function(data){
            console.log("Returned: " + data);
        });
	}
}

function addPost(message){
	var chat_window = document.getElementById("chat_window");
	var message_window = document.getElementById("message_window");
	
	node = document.createElement("DIV");
	textnode = document.createTextNode(message);
	node.className = "chat_message";
	node.appendChild(textnode);
	chat_window.appendChild(node);
	message_window.scrollIntoView();
}

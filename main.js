document.getElementById('submit').addEventListener('click', function() {

  
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  

  var postsDiv = document.querySelector('.posts');

  var newPostsDiv = document.createElement('div');

  var newPostMessageP = document.createElement('p');
  var newPostMessageText = document.createTextNode(message);
  newPostMessageP.appendChild(newPostMessageText);

  var newPostNameP = document.createElement('p');
  var newPostNameText = document.createTextNode('Posted by: ' + name);
  newPostNameP.appendChild(newPostNameText);

  var newPostHR = document.createElement('hr');

  newPostsDiv.append(newPostMessageP);
  newPostsDiv.append(newPostNameP);
  newPostsDiv.append(newPostHR);
  postsDiv.append(newPostsDiv);
});

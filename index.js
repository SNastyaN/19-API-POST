let postButton = document.querySelector('.btn');
let massagesList = document.querySelector('.container');
postButton.onclick =function(e){
      let user ={
            title: document.querySelector('#title').value,
            body: document.querySelector('#massage').value
        }
        console.log(user);
      
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })  
    .then(response => response.json())
    .then(user.forEach(element => {
      let div = document.createElement('div');
      div.classList.add('massage');
      div.innerHTML =`<p>${element.title}</p>
      <p>${element.body}</p>
      `;
      massagesList.append(div);


      
    }))
}
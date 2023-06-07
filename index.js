let postButton = document.querySelector('.btn');
postButton.onclick =function(e){
      let user ={
            title: document.querySelector('#title').value,
            body: document.querySelector('#massage').value
        }
        console.log(user);
      
        let massagesList = document.querySelector('.container');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  
  .then(response => response.json())
  .then(json => {
    json.forEach((elem) => {
          let div = document.createElement('div');
          div.classList.add('massage');
          div.innerHTML =`<p>Заголовок:</p>
          <p>${elem.title}</p><p>Сообщение:</p>
          <p>${elem.body}</p>
          `;
          massagesList.append(div);

    }) 
  
})}
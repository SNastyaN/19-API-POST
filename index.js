let postButton = document.querySelector('.btn');
postButton.onclick =function(e){
      let massage1 ={
            mass: document.querySelector('.title').value
            mas: document.querySelector('.massage').value

      }
      console.log(massage1)
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

// то такой запрос вернёт
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
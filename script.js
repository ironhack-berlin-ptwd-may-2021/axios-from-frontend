



document.querySelector('#refreshbutton').onclick = () => {

  document.querySelector('#characters-list').innerHTML = ''

  axios
    .get('https://ih-crud-api.herokuapp.com/characters')
    .then(response => {
      let respArr = response.data
      console.log("respArr", respArr)
      respArr.forEach(character => {

        document.querySelector('#characters-list').innerHTML += `<li class="list-group-item">
          ID: ${character.id} - ${character.name}          
      </li>`

      });
    })
}


document.querySelector('#new-character-form').onsubmit = (event) => {
  event.preventDefault()

  axios
    .post('https://ih-crud-api.herokuapp.com/characters', {
      "name": document.querySelector('#input-name').value,
      "occupation": document.querySelector('#input-occupation').value,
      "weapon": document.querySelector('#input-weapon').value,
      "debt": true
    }).then(() => { console.log("stored successfully") })

}

function fetchBooks() {

  const posts = fetch('https://anapioficeandfire.com/api/books')
    .then(function (response){
      return response.json()
      console.log(json);
    })
    .then(data => {
      console.log(data);
    })
  }


 function renderBooks(data) {
  const books = response.json()
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
 console.log(data)
  });
}

function renderBooks();

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

// Lab deliverables
//1) fetchBooks() function includes a fetch request method to Game Of Thrones API
//2) The Returned response converted to JSON.
//3) Call 2nd function passing in data from Step #2 as the argument.





// fetch("https://dev--emojisplosion.tpnyc.autocode.gg/posthere/",{
// method: "POST",
// headers: {'Content-Type':'application/json'},
// body: JSON.stringify({emoji:"flag-md"})
// })

// fetch("https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json", config)
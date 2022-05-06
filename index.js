
function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then((json) => renderBooks(json));

}

function renderBooks(books) {
  console.log(books)

  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    // console.log(data)
  });
}


document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
// QUESTIONS FOR TOMAS
// 1) Syntax to passing in the JSON-ified data as the
// argument in the second function.


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
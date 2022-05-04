
function fetchBooks() {

  return fetch("https://anapioficeandfire.com/api/books")
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })

}


console.log(fetchBooks)





function renderBooks(info) {
  const books = response.json()
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

// Lab deliverables
//1) fetchBooks() function includes a fetch request method to Game Of Thrones API
//2) The Returned response converted to JSON.
//3) Call 2nd function passing in data from Step #2 as the argument.


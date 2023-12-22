const myLibrary = [];

function book(title,author,pages,status) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
}

function addBookToLibrary() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");

    if (title.value == "" || author.value == "" || pages.value == "") {
       alert("Ensure you input a value in both fields!");
    } else {
    // perform operation with form input
    
    let newBook = new book(title.value,`By, ${author.value}`,`${pages.value} pages`,read.value);
    myLibrary.push(newBook);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
    }
    console.log(myLibrary[0]);
}

function createForm() {
    const newBook=document.createElement("div");
    const card=document.createElement("div");
    const form=document.createElement("form");
    form.classList.add("book-form")
    const close=document.createElement("div");

    //Form
    form.innerHTML=`<div class="book-title">
    <label for="title">Title: </label>
    <input type="text" id="title" name="title">
    </div>
    <div class="book-author">
    <label for="author">Author:</label><br>
    <input type="text" id="author" name="author">
    </div>
    <div class="book-pages">
    <label for="pages">Pages:</label>
    <input type="number" id="pages" name="pages" min="1">
    </div>
    <div class="book-read">
    <input type="checkbox" id="read" name="read" value="Read">
    <label for="read">Book read</label>
    </div>
    <input type="submit" class="submit-button" value="Submit">`;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (title.value != "" || author.value != "" || pages.value != "") {
            addBookToLibrary();
            createCard(myLibrary.length-1);
        }
    })

    newBook.classList.add("new-book");
    document.body.appendChild(newBook);
    
    close.classList.add("close-button");
    close.innerHTML=`<i class="fi fi-rr-cross-circle"></i>`;
    close.addEventListener("click", () => {
        document.body.removeChild(newBook);
    })

    card.classList.add("card");
    card.classList.add("book-card")
    card.textContent="Enter details";

    card.appendChild(close);
    card.appendChild(form);
    newBook.appendChild(card);
}

function updateLibrary() {
    for (let i=0; i<myLibrary.length;i++) {
        createCard(i);
    }
}

function createCard(i) {
    let books = document.getElementsByClassName("books")
    books.textContent="";
    
    let title=document.createElement("div");
    title.classList.add("title");
    let author=document.createElement("div");
    author.classList.add("author");
    let pages=document.createElement("div");
    pages.classList.add("pages");
    let status=document.createElement("div");
    status.classList.add("status");

    let newCard=document.createElement("div");
    newCard.classList.add("card");
    let details=document.createElement("div");
    details.classList.add("details");
    let ops=document.createElement("div");
    ops.classList.add("ops")
    ops.innerHTML=`<div class="edit">
                        <i class="fi fi-rr-pencil"></i>
                    </div>  
                    <div class="delete">
                        <i class="fi fi-rr-trash"></i>
                    </div> `;
    title.textContent=myLibrary[i]["title"];
    author.textContent=myLibrary[i]["author"];
    pages.textContent=myLibrary[i]["pages"];
    status.textContent=myLibrary[i]["status"];

    console.log(`${title},${author.textContent},${pages.textContent},${status.textContent}`);
     details.appendChild(author);
     details.appendChild(pages);
    details.appendChild(status);
    newCard.appendChild(title);
    newCard.appendChild(details);
    newCard.appendChild(ops);
    books[0].appendChild(newCard);
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
  }
}
# MyReads Project
This is React Nanodegree programs first project, this app allows you to categorize books you have in your book shelf into three categories currently reading, want to read and read. There is also a search page from which you can add books to your bookshelf. The search terms supported by the search page can be found in this file  [SEARCH_TERMS.md](SEARCH_TERMS.md). 
The basic requirements for the project are node.js ,npm , terminal. The project was created from the starter template that was given with the project .
 

To get the application running :

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It contains all the dependencies.
├── public
│   ├── favicon.ico # React Icon,.
│   └── index.html 
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── MainPage.js # this is main page of the app which displays bookshelf component it has a link to searchpage.
    ├── SearchPage.js # this component is for the searchpage.
    ├── ListBooks.js # this component is used to display the books.
 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles..
    └── index.js # It is used for DOM rendering only.
```


On the home page we will find three shelves with books in it. The books contain a drop down box which controls in which shelf the book is in. Select the shelf you want to place the book in. Click the plus icon to go to the search page. The search page has search box which allows you to search for books. Like the home page each book has a drop down box which controls where it can be placed and you can also see that the value in the drop down box is the actual value of the books shelf. Here you can add books to your shelf, the back icon takes you to your home page.

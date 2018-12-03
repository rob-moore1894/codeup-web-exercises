(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        "firstName": "Rob",
        "lastName": "Moore"
    };

    document.body.innerHTML = person.firstName + " " + person.lastName;

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        console.log("Hello from " + this.firstName + " " + this.lastName);
    };

    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        var discount;
        var discountedAmount;
        var discountPercentage;
        if (shopper.amount >= 200) {
            discountPercentage = 12/100;
            discount = shopper.amount * discountPercentage;
            discountedAmount = shopper.amount - discount;
        } else {
            discountPercentage = 0;
            discountedAmount = shopper.amount;
        }
        console.log(shopper.name + " spent $" + shopper.amount + " received a discount of " + discountPercentage  * 100 + "% and paid $" + discountedAmount.toFixed(2));
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            "title": "Astrophysics for People in a Hurry",
            "author": {
                "firstName": "Neil",
                "lastName": "Tyson"
            }
        },
        {
            "title": "Proof: The Science of Booze",
            "author": {
                "firstName": "Adam",
                "lastName": "Rogers"
            }
        },
        {
            "title": "Things to Make and Do in the Fourth Dimension",
            "author": {
                "firstName": "Matt",
                "lastName": "Parker"
            }
        },
        {
            "title": "Philosophiae Naturalis Principia Mathematica",
            "author": {
                "firstName": "Isaac",
                "lastName": "Newton"
            }
        },
        {
            "title": "Physics of the Impossible",
            "author": {
                "firstName": "Michio",
                "lastName": "Kaku"
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(element, index) {
        showBookInfo(element, index);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *  use your function.
     */

    var newBooks = [];

    function createBook(title, author) {
        title = prompt("What is the title of the book?");
        author = prompt("Who is the author?");
        author = author.split(" ");
        newBooks = {
            "bookTitle": title,
            "bookAuthor": {
                authorFirstName: author[0],
                authorLastName: author[1]
            }
        };
        return "Title: " + newBooks.bookTitle + "\n" + "Author: " + newBooks.bookAuthor.authorFirstName + " " + newBooks.bookAuthor.authorLastName + "\n---";
    }

    console.log(createBook());

    /** - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function showBookInfo(book, index) {
        console.log("Book # " + (index + 1) + "\nTitle: " + book.title + "\n" +
                "Author: " + book.author.firstName + " " + book.author.lastName + "\n" +
                "---");
    }


})();

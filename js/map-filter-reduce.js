"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const usersByLanguage = users.filter(i => i.languages.length >=3);
console.log(usersByLanguage);

// Use .map to create an array of strings where each element is a user's email address

const usersByEmail = users.map(user => user.email);
console.log(usersByEmail);

// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYearsOfExperience = users.reduce((total, user) => user.yearsOfExperience + total, 0);
$('#users').text(`Average number of Experiential Years: ${ totalYearsOfExperience / users.length}`);

// Use reduce to get the longest email from the list of users.
// var longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });

const longestEmail = users.reduce(function(a, b) { return a.email.length > b.email.length ? a : b});
console.log(longestEmail);

// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const usersByName = users.reduce((name, user) => user.name + `${ name }`, "");
console.log(usersByName);
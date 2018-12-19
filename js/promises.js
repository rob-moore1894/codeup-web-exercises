"use strict";

$(document).ready(function(){

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

    function wait(number){
        return new Promise(function (resolve, reject){
            setTimeout(function(){
                if (number !== 1000) {
                    resolve("You will see this after " + (number/1000) + " seconds.");
                }else {
                    resolve("You will see this after " + (number/1000) + " second.")
                }
            }, number)
        });
}

wait(2000).then(function(resolve){
    console.log(resolve);
});
wait(1000).then(function (resolve) {
    console.log(resolve);
});

// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made.

const API_TOKEN = '';

const fetchOptions = {
    headers: {'Authorization': `token ${API_TOKEN}`}
};

function checkResponseForErrors(response) {
    if (response.status !== 200){ //200 is retrieved with no errors
        return alert(response.status);
    }
    return Promise.resolve(response);
}

function convertToJSON(response){
    const jsonResponse = response.json();
    console.table(jsonResponse);
    return jsonResponse;
}


function findCommit(data) {
    return data[0].created_at;
}

function showData(commit) {
    $('#display').text(`Last commit was at ${moment(commit).tz('America/Monterrey').format("MM-DD-YYYY hh:mm z")}`);
    $('#username').val('');
}

function lastCommit(username) {
    console.log(username);
    fetch(`https://api.github.com/users/${username}/events`, fetchOptions)
        .then(checkResponseForErrors)
        .then(convertToJSON)
        .then(findCommit)
        .then(showData);
}

let userName = $('#username');
$('#submitBtn').click(function (){
    lastCommit(userName.val());
});

});

# tvseriestracker

https://tvseriestracker.netlify.app/

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info

A web app to track your favorite television series.

Using tvmaze.com api to access details on each of the shows providing cover photos and overviews. 
It features a user system where the user must be be logged in before being able to access the site, since nearly all use on the site requires the use of a user account.

Currently it supports logging in, searching and adding shows to your collection, recording the collection with options to sort and untrack show.
You are able to add a show manually or by searching using the api and adding automatically with a button press.

Possible future ideas include friends watchlist and sharing options.

User accounts are free and can be created with just username, email and password, they are only used to store the data in the database to each user and allow for a personalised experience in the showlist.

## Technologies
Project is created with:
* MongoDB 
* Express.js
* React.js
* Node.js

## Setup
To run this project, install it locally using npm:
```
$ install MongoDB from here https://www.mongodb.com/try/download/community
$ backend/ -> npm i -> npm run start
$ frontend/ -> npm i -> npm run start
Open http://localhost in the browser.
```

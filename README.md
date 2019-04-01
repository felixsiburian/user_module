# USER MODULE
REST API SERVER for user module

## Features
 - User Registration
 - Update User Profile
 - Update User Password
 - <b>(Bonus)</b> Get All REgistered User

## Tech Stack
name | desc 
-----| -----
nodejs| backend js
express | nodejs framework
mysql | mysql adaptor for nodejs
body-parser | post request body parser
morgan (dev) | http request logger,on development environment only
express-validator | request body validator




## Installation
1. Clone this repository
2. <code>npm install</code> to install all dependencies
3. Setting database:<br>
	- Create database. Configure database settings on <code>src/db.js</code>
	- To create table instantly. Import db.sql in root folder to created database
4. <code>npm start </code> in root folder to start server


## API Documentation
Please check API documentation at [API Guiodeline]: localhost:3000/

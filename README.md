# REST-API-user-profile-module
This API is used to update user password and change user profile
# USER MODULE

REST API SERVER for user module

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
1. Clone repo
2. <code>npm install</code> to install all dependencies
3. Setting database:
		- Create database. Configure database settings on <code>src/db.js</code>
		- Import db.sql in root folder to database

4. <code>node server</code> in root folder to start server


## API Documentation
Visit localhost:3000/guide

# Turtle Back Zoo Web App

This project consists of a frontend and a backend component.

## Frontend

### Description
The frontend is built using Vite, a modern build tool for frontend development with blazing fast cold server start.

### Installation
1. Navigate to the `frontend` directory.
2. Install dependencies with `npm install`.

### Usage
1. Start the development server with `npm run start`. The frontend server will run at [http://localhost:5173](http://localhost:5173).
2. Build the project for production with `npm run build`.

## Backend

### Description
The backend is built using Node.js, ExpressJs and MongoDB with Nodemon for automatic server restarts during development.
The backend contains various third party npm packages like JWT Token, bcrypt, qrcode and so on.
The system on which the project will going to run should must have installed MongoDB compass for local database.

### Installation
1. Navigate to the `backend` directory.
2. Install dependencies with `npm install`.

## Run Seed.js File
1. Navigate to the `backend` directory.
2. Load test data from seed.js file into your mongoDB compass by running command 'node seed.js' . 


### Usage
1. Start the backend server with `npm run start`. The server will run at [http://localhost:4000](http://localhost:4000).
2. There will be also the message of database connected on the terminal

### How to add admin

go to url tab of the browser and paste the route link i.e [http://localhost:5173/admin](http://localhost:5173/admin).
go to staff management section after that go to the addStaff section and add a staff
so you can create his admin account and go to register and register with same email id.
after registration login and you will be redirected to admin section the webapp.

To add account for caretaker animal specalist or employee admin have to define the role first then they can able to register themself as specialist or caretaker or employee. 

to see the graphs, chart he/she have to add the data first.then on that data the graphs and charts will display on admin dashboard.

first you have to add data like animals , events and so on  manually then it will display on all the section of the webapp in case if seed.js don't work properly.
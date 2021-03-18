# GuestbookUi

This is angular based project that works as a frontend for out Guest Book Application.
Below are few activities performed in this application using UI:
1. New user can be created using register endpoint.
2. User can add either a text or a image entry in guest book.
3. User can view, edit and delete his entry.
4. Admin can view all the guest book entries.
5. Admin can approve, edit, delete a particular entry.

## Pre requisite

1. Node.js
2. Angular 10

## Steps to build and run

1. Clone the project to local machine using command `git clone https://github.com/DipakChouhan/tm-guestbook-app.git`.
2. Run `npm install` to install the dependencies.
3. User `ng serve` to start the server on port 4200. Use `http://localhost:4200` to access the application. 

## Creating admin user
1. First create a regular user using registraion page.
2. Update the ROLE of the user in database to `ADMIN` using command `update user set role = 'ADMIN' where user_email = <user_email>`.

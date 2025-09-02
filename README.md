#This project implements a RESTful API using Node.js, Express, and MySQL.  
We use **CRUD operations** (Create, Read, Update, Delete) for two tables:  
- students 
- courses

#Objectives
By the end of this laboratory activity, you should be able to:

-Explain CRUD operations and how they map to HTTP methods in a REST API.
-Set up a basic Express.js project and connect it to a MySQL database.
-Implement routes and controllers that perform Create, Read, Update, and Delete on a students table.
-Test endpoints using Postman (or cURL) and interpret responses and common error messages.
-Organize code into modules for readability and maintainability (separating config, routes, and controllers).

#Setup
- Open Mysql and start 'Apache' and "MySQL'
- Create a Database name 'lab_crud'
- Check credentials in .env
- Run 'npm run dev'

#Tools Used
- Node.js
- Express.js
- MySQL
- Postman
- GitHub
  
# 🔗 API Endpoints (using Postman {{baseUrl}})

#Students
- POST {{baseUrl}}/students → Add new student
- GET {{baseUrl}}/students → Get all students
- GET {{baseUrl}}/students/0 → Get student by ID  
- PUT {{baseUrl}}/students/0 → Update student  
- DELETE {{baseUrl}}/students/0 → Delete student  

#Courses
- POST {{baseUrl}}/courses → Add new course
- GET {{baseUrl}}/courses → Get all courses
- GET {{baseUrl}}/courses/1 → Get course by ID  
- PUT {{baseUrl}}/courses/1 → Update course  
- DELETE {{baseUrl}}/courses/1 → Delete course  

#Health Check
- GET `{{baseUrl}}/health` → Verify API is running

#Short notes (3–5 lines): what worked; any issues; how you fixed it.
I have followed all the steps correctly until Part 6 of Part 2, but I encountered a problem. I forgot to check all the privileges in the MySQL database user account, 
and because of that, the database cannot connect, and access is denied.  I check my .env file, and it is working properly, and my seatmate suggests that I check all 
the privileges on MySQL and after that it works properly.

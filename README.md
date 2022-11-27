# Draft in progress ....!<img src="https://i.imgur.com/hkpQOyy.gif" width="40" height="40" />



## About Project


This is small full stack Project

I use several technologies:

:green_circle: ReactJS as FrontEnd<br/>:green_circle: NodeJS as BackEnd<br/>:green_circle: mySQL as Database





## Technical Information


### :green_circle: Front-End 

React JS version: 18.2.0

- In React logic I using [Hooks](https://reactjs.org/docs/hooks-intro.html) 
- For visual side - [sass](https://sass-lang.com/) module. 
- Request generated with [Axios](https://axios-http.com/docs/intro) HTTP client and sending to NODE server(Back-End).
- React App uploaded on [Netlify](https://productlistcrud.netlify.app/) hosting.


### :green_circle: Back-End

NODE JS version: v16.14.0

This is small API CRUD server and can receive request from Front-End Side. <br/>:arrow_right: (Create - Read - Update - Delete) 	:arrow_left:

---

Why I choose Netlify and Heroku? 💡

Easy to use and free
Connected to Git Repositories
Auto Deploy & Bilding projects
Checking Errors and Dependencies
Good online "show room"
Free SSL certificate


🟢 DataBase
mySQL version: 5.7.39

Requests map seems like:

React App (requests) ➡️ NODE server (requests) ➡️ mySQL database
React App (requests)⬅️ NODE server (requests) ⬅️ mySQL database


🟢 How to use?

If you need to start my project on your computer, you need to done several steps:

### React App :atom:

Open => [Git Bash](https://git-scm.com/downloads)

cd c:/"WorkingDirectory" for example my directory is "c:/web"

git clone git@github.com:bladwing/inventorymanagement.git
cd inventorymanagement/FrontEnd
npm i
npm start

localhost:3000


### Node Server :electron:

Open another => [Git Bash](https://git-scm.com/downloads)
cd inventorymanagement/BackEnd
npm i
npx nodemon

localhost:5000


### Create mySQL server 
I using [XAMPP](https://www.apachefriends.org/index.html) development environment

inventorymanagement/config/invstock.sql

Create in phpMyAdmin panel table with name - invstock

Import database from file invstock.sql to your table - invstock


Enjoy Life.

## How to use? :underage:

After installation Follow link - localhost:3000

Login: Admin
Password: 123456

![](https://i.imgur.com/V8TyQqw.png)



---
### Login
After login you get Main Page
Here you have information about your company.

![](https://i.imgur.com/YEDto0m.png)





---


### Companies
For this moment you can remove or add company

![](https://i.imgur.com/Pk3F1Nw.png)

### Add Company

Fill simple form, after save => you redirect to companies

![](https://i.imgur.com/3poMNz1.png)



---

### Stock

![](https://i.imgur.com/bg5zxxw.png)


---


### Add Product

![](https://i.imgur.com/Yfmz96e.png)


---

### Edit Product

![](https://i.imgur.com/IOZQxtM.png)


---

### Sell Product

![](https://i.imgur.com/0EyFSmt.png)


---

### Sold Product

![](https://i.imgur.com/RSAwz5V.png)


---

### Sold Product Detail

![](https://i.imgur.com/vxHJM7B.png)

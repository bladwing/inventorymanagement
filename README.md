<img src="https://i.imgur.com/jjpyI1O.png" width="200px">

## About Project




This is small Full Stack Project of Inventory Management

I use several technologies:

:green_circle: ReactJS as FrontEnd<br/>:green_circle: NodeJS as BackEnd<br/>:green_circle: mySQL as Database



## Technical Information


### :green_circle: Front-End 

React JS version: 18.2.0

- In React logic I using **[Hooks](https://reactjs.org/docs/hooks-intro.html)**
- For visual side - **[Bootstrap](https://getbootstrap.com/)** 
- Request generated with **[Axios](https://axios-http.com/docs/intro)** HTTP client and sending to NODE server(Back-End).
- **[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** - for saving user authorization information.
- React App uploaded on **[Netlify](https://productlistcrud.netlify.app/)** hosting.



### :green_circle: Back-End

NODE JS version: v16.14.0

For easy to use mySql **[Sequelize ](https://sequelize.org/)** - ORM library for nodejs

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

Open => **[Git Bash](https://git-scm.com/downloads)**

`cd c:/"WorkingDirectory"  for example my directory is  "c:/web"`


```
git clone git@github.com:bladwing/inventorymanagement.git

cd inventorymanagement/FrontEnd

npm i

npm start
```

Project will start automatically in default browser and available on this link - **localhost:3000**


### Node Server :electron:

Open another => **[Git Bash](https://git-scm.com/downloads)**

```
cd inventorymanagement/BackEnd

npm i

npx nodemon
```

Available in browser on this link - **localhost:5000**


### Create mySQL server 
I using **[XAMPP](https://www.apachefriends.org/index.html)** development environment

Create in **phpMyAdmin** panel table with name - **invstock**

Import database from file **invstock.sql** to your table - **invstock**

NOTE: **invstock.sql** - Located in root directory of project.

***Enjoy Life.***

## How to use? :underage:

After installation Follow link - **localhost:3000**

Before Sign In please check **Program Guide** on Login page <img src="https://i.imgur.com/gssN9xb.png" width="40" height="40" />


Login: **Admin**</br>Password: **123456**

Live Demo - **[SunRise](https://invmanagersite.netlify.com)**

---
## In Futures 

<img src="https://i.imgur.com/BqRwtRK.png" width="400"> 

- **Optimize authorization module**
    - **[Set Expiry](https://www.sohamkamani.com/javascript/localstorage-with-ttl-expiry/)** Time for LocalStorage - after expire clean auth informateion(Logout) 
    - Create **[Token](https://css-tricks.com/react-authentication-access-control/)** auth module
- **Profile** - Make information editable
- **User Managment**
    - Create
    -- Access level for Users
    -- Profile Module of User
    -- Create/Edit/Delete Function for Users
- **Companies **
    - Make editable companies information
    - Create Buying history for each company - for good reporting
- **Stock** 
    - Create counting logics 
    **For example:** </br> Your amount 10 pieces of product with code x777</br> You sell 3 pieces</br>You need separate item with same code x777</br>**Like that -**</br>in Stock keep 7 pieces with code x777</br>In Sold show 3 pieces with code x777
    - Create Pre-ordering Module
    - Create Several items order (when one company buy several item)
- **Create Validation for all value in all module** 
- Create - **are you sure?** popups
- ....
<img src="https://i.imgur.com/nzi7myW.png" width="400"> 


![](https://i.imgur.com/hFphVbC.gif)



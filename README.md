# Bamazon - an Amazon-like storefront

## Overview
In this activity, I created an Amazon-like storefront with the MySQL skills we learned in this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

Bamazon also uses MySQL and Inquirer npm packages for data input and storage.

## Built With/Installations Required

* [Node.js] (https://nodejs.org/en/)
* [JavaScript] (https://www.javascript.com/)
* [MySQL npm package] (https://www.npmjs.com/package/mysql)
* [Inquirer npm package] (https://www.npmjs.com/package/inquirer)
* [MySQL Database] (https://www.mysql.com/)

### Commands

1. `node bamazoncustomer.js`
    * This command executes the program

![Execute](https://github.com/jordanservos/Bamazon/blob/master/pics/Screen%20Shot%202020-03-04%20at%203.57.59%20PM.png)


2. `User Prompts`
    * Once executed, the program will show a table with all available product selections. The user will be be prompted to entire the ID of the product they're interested in purchasing. A follow up prompt will ask how many they'd like to purchase. 

    ![Next](https://github.com/jordanservos/Bamazon/blob/master/pics/Screen%20Shot%202020-03-04%20at%203.59.01%20PM.png)


3. `MySQL Database Queries`
    * Once a user answers the prompts, stock quantity is checked in the database - if sufficient, the order total will be calculated and console logged with a success message. 

    ![Next](https://github.com/jordanservos/Bamazon/blob/master/pics/Screen%20Shot%202020-03-04%20at%203.59.34%20PM.png)
    
    If there's isn't sufficient stock to fufill the order, an "Insufficient Quantatity" message is show to the user
    
    ![Next](https://github.com/jordanservos/Bamazon/blob/master/pics/Screen%20Shot%202020-03-04%20at%204.00.32%20PM.png)
    
### MySQL Database 

For the project, I created a MySQL Database called bamazon.I then created a Table inside of that database called products.


The products table includes the following columns:

* item_id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)

I then populated this database with 10 different products.

![Next](https://github.com/jordanservos/Bamazon/blob/master/pics/Screen%20Shot%202020-03-04%20at%204.17.42%20PM.png)



    

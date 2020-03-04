var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "JsK99614214!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    showTable();




});



function showTable() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
        userSelection(res);


    })
};

function userSelection() {
    inquirer.prompt([

        {
            type: "input",
            name: "choice",
            message: "What is the ID # of the item are you interested in purchasing?",

        },

        {
            type: "input",
            name: "quantity",
            message: "How many would like to purchase?"
        },

    ]).then(function(answers) {
        var userQuantity = answers.quantity;
        var idSelected = answers.choice;
        // console.log(userQuantity, idSelected)
        createOrder(idSelected, userQuantity);


    });

};

function createOrder(productID, quanRequested) {
    connection.query('SELECT * FROM products WHERE item_id = ' + productID, function(err, res) {
        if (err) throw err;
        // console.table(res);
        if (quanRequested <= res[0].stock_quantity) {
            var cost = res[0].price * quanRequested;
            var productName = res[0].product_name;
            // console.log(cost);
            console.log("----------------------------")
            console.log("Your requested order is available! Congrats...")
            console.log("Your " + productName + " order total is " + "$" + cost.toFixed(2));
            console.log("Thanks for the purchase!")
            console.log("----------------------------")
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quanRequested + " WHERE item_id = " + productID);

            console.log("Stock quantity of item " + productName + " is now updated")
            console.log("----------------------------")
            connection.end();



        } else {
            console.log("----------------------------")
            console.log("Insufficient quantity - we only have " + res[0].stock_quantity + " available")
            console.log("----------------------------")
            connection.end();
        }

    })



}
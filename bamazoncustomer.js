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

    // connection.end();


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
            // console.log(cost);

        }

    })

}
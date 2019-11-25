var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "amazon_db"
});
var dataResult;
var updateAmount;
var queryId;

connection.connect(function(err) {
    if (err) throw err;
    console.log(
        "\n" + "Welcome! SHOPPING AHHHH" + "\n\n"
    );
    connection.query("SELECT * FROM product", function(err, result, fields) {
        if (err) throw err;
        dataResult = result;
        console.log("| id | item  | price  |" + "\n");
        for (var i = 0; i < dataResult.length; i++) {
            console.log(
                " | " + dataResult[i].item_id +
                " | " + dataResult[i].item_name +
                " | " + dataResult[i].price +
                " | " + "\n"
            );
        }
        console.log("\n");
        askQuestion();
    });
});

function askQuestion() {
    inquirer
        .prompt([{
                type: "input",
                name: "id",
                message: "Which ID would you like to purchase?"
            },
            {
                type: "input",
                name: "amount",
                message: "And how many would you like today?"
            }
        ])
        .then(function(answer) {
            queryId = answer.id - 1;
            if (dataResult[queryId].amount < answer.units) {
                console.log(
                    "Amount not available. try again." +
                    "\n"
                );
                askQuestion();
            } else {
                console.log("your order has been placed. thank you for shopping with us" + "\n");
                updateAmount(answer);
            }
            connection.end();
        });
}

function updateAmount(answer) {
    updateAmount = dataResult[queryId].amount - answer.units;
    connection.query("UPDATE product SET ? WHERE ?", [{
            amount: updateAmount
        },
        {
            item_id: answer.id
        }
    ]);
    var userCost = answer.units * dataResult[queryId].price;
    console.log("Thank you, your total today is: $" + userCost);
}
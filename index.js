// setup server
// YOUR CODE
var express = require ("express");
var app = express();
//app.get('/', function(req, res){
  //  res.send("Hello!");
//});
// setup data store
// YOUR CODE
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
 
const adapter = new FileSync('db.json');
const db = low(adapter);
var cors = require ("cors");

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));
app.use(cors());


 
// Set some defaults
db.defaults({ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
})
  .write();


// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/data', function(req, res){
    res.send(db.get('accounts').value());
});


app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    var account = {
        "name"        : req.params.name,
         "email"       : req.params.email,
         "balance"     : 0,
         "password"    : req.params.password,
         "transactions" : []
    }
    console.log(account);
    db.get('accounts').push(account).write();
    console.log(db.get('accounts').value());
res.send(db.get('accounts').value());
res.send("Success");
console.log('success');
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("No such email registered")
    } else if (login_email.password == req.params.password){
        console.log('Login success')
        console.log(login_email.email)
        status.innerHTML = 'success'
    } else {
        console.log("incorrect password")
    }
});


//console.log(req.params.email + req.params.password);

//});

app.get('/account/balance/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("No such email registered")
    } else if (login_email.password == req.params.password){
        console.log('Balance:')
        console.log(login_email.balance)
    } else {
        console.log("incorrect password")
    }

});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("no such user");
    } else {
        var total_val = parseInt(login_email.balance)+ parseInt(req.params.amount);
        db.get('accounts').find({email : req.params.email}).assign({balance: total_val}).write();
        
        var trans = db.get('accounts').find({email : req.params.email}).get('transactions').value();
        var text_trans = "Deposit:" + (req.params.amount) + ' -> Total Value:' + total_val 
        trans.push(text_trans);
        db.get('accounts').find({email : req.params.email}).assign({transactions : trans}).write();

        console.log(login_email.email)
        console.log(text_trans)
    }

});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("no such user");
    } else {
        var total_val = parseInt(login_email.balance) - parseInt(req.params.amount);
        db.get('accounts').find({email : req.params.email}).assign({balance: total_val}).write();

        var trans = db.get('accounts').find({email : req.params.email}).get('transactions').value();
        var text_trans = "Withdraw:" + (req.params.amount) + ' -> Total Value:' + total_val 
        trans.push(text_trans);
        db.get('accounts').find({email : req.params.email}).assign({transactions : trans}).write();

        console.log(login_email.email)
        console.log(text_trans)
    }
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("No such email registered")
    } else if (login_email.password == req.params.password){
        console.log('Transactions:')
        console.log(login_email.transactions)
    } else {
        console.log("incorrect password")
    }

});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    console.log(db.get('accounts').value());
});


app.listen(3000, function(){
    console.log("Running on Port 3000");
});
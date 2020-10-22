



function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------
   // var status = document.getElementById('status');
    var name = document.getElementById('formGroupName').value; 
    var email = document.getElementById('formGroupEmail').value; 
    var password = document.getElementById('formGroupPassword').value;
    var status  = document.getElementById('status');
    var url = '/accounts/create/' + name + '/' + email + '/' + password;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = 'Error'
                setTimeout(function(){status.innerHTML ='';},3000);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res);
                status.innerHTML = "Account created"
                setTimeout(function(){status.innerHTML ='';},3000);
            }
        });
   // db.get('accounts')
  //  .push( {name        : '',
  //  email       : '',
  //  balance     : 0,
   // password    : '',
   // transactions: []})  
   // .write()  
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var email    = document.getElementById('formGroupEmail').value;
    var password = document.getElementById('formGroupPassword').value;
    var status  = document.getElementById('status');
    var url_login      = '/account/Login/'+ email + '/' + password;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = 'Error'
                setTimeout(function(){status.innerHTML ='';},3000);
            } else{
                console.log(res);
                status.innerHTML = "Login successful"
                setTimeout(function(){status.innerHTML ='';},3000);
            }
        });
}


function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    var email = document.getElementById('formGroupEmail').value;
    var amount = document.getElementById('formGroupAmount').value
    var status  = document.getElementById('status');
    var url_login = '/account/deposit/' + email + '/' + amount;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = 'Error'
                setTimeout(function(){status.innerHTML ='';},3000);
            } else{
                console.log(res);
                status.innerHTML = 'Deposit successful'
                setTimeout(function(){status.innerHTML ='';},3000);
            }
        });
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email = document.getElementById('formGroupEmail').value;
    var amount = document.getElementById('formGroupAmount').value;
    var status  = document.getElementById('status');
    var url_login = '/account/withdraw/' + email + '/' + amount;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = 'Error'
                setTimeout(function(){status.innerHTML ='';},3000);
            } else{
                console.log(res);
                status.innerHTML = "success, but I can't tell you how much you withdrew because I don't know how to do that"
                setTimeout(function(){status.innerHTML ='';},3000);
            }
        });
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    var email = document.getElementById('formGroupEmail').value;
    var status  = document.getElementById('status');
    var url_login = '/account/transactions/' + email;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = 'Error'
                setTimeout(function(){status.innerHTML ='';},3000);
            } else{
                console.log(res);
                status.innerHTML = 'not sure what is supposed to show on this page anyway'
                setTimeout(function(){status.innerHTML ='';},3000);
            }
        });
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    var email = document.getElementById('formGroupEmail').value;
    var status  = document.getElementById('status');
    var url_login = '/account/balance/' + email;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = 'Error'
                setTimeout(function(){status.innerHTML ='';},3000);
            } else{
                console.log(res);
                status.innerHTML = 'you have sooo many megabucks'
                setTimeout(function(){status.innerHTML ='';},3000);
            }
        });
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    
    var url_login = '/account/allData';
    var status  = document.getElementById('status');
console.log(url_login);

    superagent
    .get(url_login)
    .end(function(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
            status.innerHTML = JSON.stringify(res.body);
        }
    })
}
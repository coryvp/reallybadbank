var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" onclick="defaultModule">BadBank</a> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <a class="nav-item nav-link" href="#" onclick="loadCreateAccount()" >Create Account</a>
      <a class="nav-item nav-link" href="#" onclick="loadLogin()" >Login</a>
      <a class="nav-item nav-link" href="#" onclick="loadDeposit()" >Deposit</a>
      <a class="nav-item nav-link" href="#" onclick="loadWithdraw()" >Withdraw</a>
      <a class="nav-item nav-link" href="#" onclick="loadTransactions()" >Transaction</a>
      <a class="nav-item nav-link" href="#" onclick="loadBalance()" >Balance</a>
      <a class="nav-item nav-link" href="#" onclick="loadAllData()" >AllData</a>
    </div>
  </nav>
`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
  <form>
    <div class="form-group">
      <label for="formGroupName">Name</label>
      <input type="text" class="form-control" id="formGroupName" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="formGroupPassword">Password</label>
        <input type="password" class="form-control" id="formGroupPassword" placeholder="Enter password">
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="create()">Create account</button>
        </div>
      </div>
  </form>
</div>
</div>
`;

ui.login = `
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
  <form>

    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="formGroupPassword">Password</label>
        <input type="password" class="form-control" id="formGroupPassword" placeholder="Enter password">
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="login()">Sign in</button>
        </div>
      </div>
  </form>
</div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Deposit</div>
<div class="card-body">
  <form>

    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="formGroupAmount">Amount</label>
        <input type="number" class="form-control" id="formGroupAmount" placeholder="Enter amount of cash money">
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="deposit()">Deposit</button>
        </div>
      </div>
  </form>
</div>
</div> 
`;

ui.withdraw = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
<div class="card-header">Withdraw</div>
<div class="card-body">
  <form>

    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="formGroupAmount">Amount</label>
        <input type="number" class="form-control" id="formGroupAmount" placeholder="Enter amount">
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="withdraw()">Withdraw</button>
        </div>
      </div>
  </form>
</div>
</div> 
`;

ui.transactions = `
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">Transactions</div>
<div class="card-body">
  <form>

    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="transactions()">Show Transactions</button>
        </div>
      </div>
  </form>
</div>
</div> 
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">Balance</div>
<div class="card-body">
  <form>

    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="balance()">Show Balance</button>
        </div>
      </div>
  </form>
</div>
</div> 
`;

ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
<div class="card-header">Do you really need a bank?</div>
<div class="card-body">
  <h5 class="card-title">Welcome to Cory's Really Bad Bank</h5>
  <p class="card-text">Spend your free time with our gratifying navigation bar</p>
  <img src="bank.png" alt="weird building" width="250" height="250">
</div>
`;

ui.allData = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">All Data</div>
<div class="card-body">
  <form>

    <div class="form-group">
      <label for="formGroupEmail">Email address</label>
      <input type="email" class="form-control" id="formGroupEmail" placeholder="Enter email">
    </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="allData()">Show me that data!</button>
        </div>
      </div>
  </form>
</div>
</div>  
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();

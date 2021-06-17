const express = require('express'); //Require packages
const app = express();
const calc = require('./arithmeticFunctions');


app.use(express.urlencoded({extended:false})); //Middleware
app.use(express.json());

app.post("/",function(req,res){
    let operation = req.body.operation;
    let a = parseFloat(req.body.a);
    let b = parseFloat(req.body.b);
    let result = 0;
    let opname= '';

    if(operation === 'add'){
        result = calc.add(a,b);
        opname = 'Addition';
    }else if(operation ==="sub"){
        result = calc.sub(a,b);
        opname = 'Substraction';
    }else if(operation ==="mult"){
        result = calc.mult(a,b);
        opname = 'Multiplication';
    }else if(operation ==="div"){
            result = calc.div(a,b);
            opname = 'Division';
    }

    console.log(`Operation: ${opname}`)
    console.log(`Value 1: ${a}`);
    console.log(`Value 2: ${b}`);
    console.log(`Result: ${result}`);

    res.send("Check the console")

});


app.listen(1000,function(){ 
    console.log("Server running on port 1000."); //server
});
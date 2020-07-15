var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views",__dirname+"/views");
app.set("view options",{layout: false});

const employees =[
    {
        empID: 101,
        empName: "Mahatma Gandhi",
        empDesignation : "Father",
        empLocation: "Delhi",
        empSalary: 50000
    },
    {
        empID: 102,
        empName: "Nelson Mandela",
        empDesignation : "Leader",
        empLocation: "London",
        empSalary: 10000
    },
    {
        empID: 103,
        empName: "Mother Teresa",
        empDesignation : "Social Worker",
        empLocation: "Mumbai",
        empSalary: 40000
    }
]

app.get("/",function(req,res){
    res.render("index",{
        message :"Hello World",
        people:["Mahatma Gandhi", "Nelson Mandela", "Mother Teresa"],
        data:[
            {id: 101, name: "Mahatma Gandhi"},
            {id: 102, name: "Nelson Mandela"},
            {id: 103, name: "Mother Teresa"}
        ],
    });
})

app.get('/home',function(req,res){
    res.render("pages/home");
})

app.get('/about',function(req,res){
    res.render('pages/about');
})

app.get('/employees',function(req,res){
    res.render('pages/employees',{
        //render object: data
        employees: employees
    });
})

app.get('/emp/:id',function(req,res){
    const em = employees.filter((em)=>{
        return em.empID == req.params.id
    })[0]
    res.render('pages/emp',{
        empID : em.empID,
        empName: em.empName,
        empDesignation: em.empDesignation,
        empLocation: em.empLocation,
        empSalary: em.empSalary
    });
})

app.listen(5000,function(){
    console.log("server is listning at port 5000");
})
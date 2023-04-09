const express= require('express')
const path= require('path')
const app=express()
const bodyParser=require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')));
app.set(path.join(__dirname + '/views'))
app.set("view engine",'ejs');
app.use(express.static("public"))

let result=''
let status=''
app.get('/',function(req,res){

})

app.post('/',function(req,res){
 let w=req.body.weight;
 let h=req.body.height;

    var buffer= w/(h*h);
    var buffer=Math.floor(buffer*10000);
    result=buffer
    console.log(result);
    if (result < 18.5) {
        status = "you are under-weight according to your BMI";
    } else if (result >= 18.5 && result <= 24.9) {
         status = "you are healthy-weight according to your BMI";
    } else if (result >= 25.0 && result <= 29.9) {
         status = "you are over-weight according to your BMI";
    } else {
         status = "you are having obesity according to your BMI";
    }
    

console.log(status);
res.redirect('/results')
}
)

app.get('/results',function (req,res) {


   res.render('result', {result:result , status:status})
})



app.listen(3000,function(){
    console.log('server is listening on port 3000');
})
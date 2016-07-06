var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');


var app=express();

mongoose.connect('mongodb://localhost:27017/notes');
app.use(bodyparser.json());

var authenticationcontroller=require('./server/controller/authenticationcontroller');;
var notescontroller=require('./server/controller/notescontroller');


app.use('/app',express.static(__dirname+'/app'));
app.use('/css',express.static(__dirname+'/css'));
app.use('/js',express.static(__dirname+'/js'));
app.use('/images',express.static(__dirname+'/images'));
app.use('/fonts',express.static(__dirname+'/fonts'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));
app.get('/',function(req,res){
	res.sendfile("index.html");
});

app.post('/api/user/signup',authenticationcontroller.signup);
app.post('/api/user/login',authenticationcontroller.login);
app.post('/app/notes/note',notescontroller.note);
app.post('/app/main/notes',notescontroller.notes);
app.post('/app/notes/noteinfo',notescontroller.noteinfo);
app.post('/app/notes/updatenote',notescontroller.updatenote);
app.post('/app/main/deletenote',notescontroller.deletenote);
app.post('/app/notes/deletemulti',notescontroller.deletemulti);

app.listen('3333',function(){
	console.log("this works...");
});

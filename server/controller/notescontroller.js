var Note=require('../dataset/notes');
var mongoose=require('mongoose');

module.exports.note=function(req,res){
	var note = new Note(req.body);
	note.save(function(err){
		if(err){
			console.log("err in insertion");
			console.log(err);
			res.json(err);
		}
		else{
			res.json("okk");
		}
	});
	
}
module.exports.notes=function(req,res){
	var val=req.body;
	Note.find({user:val.user},function(err,result){
		if(err)
			res.json(err);
		res.json(result);
	})
}

module.exports.noteinfo=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
	Note.find({_id:id},function(err,result){
		if(err)
			res.json(err);
		console.log(result);
		res.json(result);
	})
}

module.exports.updatenote=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
	Note.update({"_id":id},{$set:{"content":req.body.content,"priority":req.body.priority}},function(err,result){
		if(err)
			res.json(err);
		res.json(result);
	});
}

module.exports.deletenote=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
	Note.remove({"_id":id},function(err,result){
		if(err)
			res.json(err);
		res.json("okk");
	});
}

module.exports.deletemulti=function(req,res){
	console.log(req.body.arr);
	Note.remove({"_id":{$in:req.body.arr}},function(err,result){
		if(err)
			res.json(err);
		res.json("okk");
	});
}
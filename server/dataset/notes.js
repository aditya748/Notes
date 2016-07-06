var mongoose=require('mongoose');
module.exports=mongoose.model('notes',{
	user:String,
	content:String,
	priority:String,
	date:{type:Date,default:Date.now}
});
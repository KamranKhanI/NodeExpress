const mongoose=require('mongoose');


const BlogSchema=mongoose.Schema({

    title:{type:String,required:true},
    email:{type:String,required:true},
    blog:{type:String,required:true},
    registered_on: {
        type: Date,
        default: new Date(),
    },
});

const blogdata=mongoose.model('blogdata',BlogSchema);

module.exports=blogdata;


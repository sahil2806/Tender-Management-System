import mongoose from 'mongoose';

const bidSchema = new mongoose.Schema({
    bidAmount :{
        type:String,
        required : true,
    },
    tender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Tedner'
    } ,
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const Bid = mongoose.model('Bid',bidSchema);
export default Bid;
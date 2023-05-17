const mongoose=require('mongoose')

const PackageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name cannot be more than 50 characters']
    },
    email:{
        
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
        required:[true,'Please add an email']
    },
    modeOfTransport:{
        type:String,
        required:[true,'Please add a mode of transport'],
        enum:[
            'Air',
            'Train'
        ]
    },
    stayMode:{
        type:String,
        required:[true,'Please add a stay mode'],
        enum:[
            'Hotel',
            'AirBnb'
        ]
    },
    
})


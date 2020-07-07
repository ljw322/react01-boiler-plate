const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image:String,
    token: {            //유효성관리
        type: String
    },
    tokenExp: {         //토큰 유효기간 등
        type: Number
    }
})

//스키마를 모델로 감싸기
const User = mongoose.model('User', userSchema)

//다른 곳에서 쓸 수 있도록 설정
module.exports={User}
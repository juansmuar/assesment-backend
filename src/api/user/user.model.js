import { Schema, model } from 'mongoose';
// import bcrypt from 'bcrypt';

const UserSchema=new Schema({
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
  },
  password:{
    type:String,
    required:true,
    min:6,
    max:8
  },
  role:{
    type:String,
    enum:['USER','ADMIN'],
    default:'USER',
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
},
  {
    timestamps:true,
    versionKey:false
  })

  // UserSchema.virtual('userProfile').get(function fulldataUser(){
  //   const {  email, role} = this.user
  //   return {
  //     email,
  //     role,
  // })

  // implementing bcrypt
  // UserSchema.pre('save', async function save(next){
  //   const user = this.user;
  //   try {
  //     if(!user.isModified('password')){
  //       return next()
  //     }
  //     const salt = await bcrypt.genSalt(10);
  //     const hash = await bcrypt.hash(user.password, salt);

  //     user.password = hash;

  //   } catch (error) {
  //     next(error);
  //   }
  // })

  // async function comparePassword(candidatePassword, next) {
  //   const user = this.user ;
  //   try {
  //     const isMatch = await bcrypt.compare(candidatePassword,user.password);
  //     console.log(isMatch);
  //     return isMatch;
  //   } catch (error) {
  //     next(error)
  //     return false;
  //   }
  // }

  // UserSchema.methods.comparePassword = comparePassword;

  const User = model('User',UserSchema);

  export default User;

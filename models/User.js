const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  name: {
    type: string,
    require: true,
  },
  email: {
    type: string,
    require: true,
    unique: true,
  },
  password: {
    type: string,
    require: true,
  },
  role: {
    type: string,
    enum: ["hr", "student", "admin", "teacher"],
  },
});

userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(this.password,saltRounds);
        this.password = hashedPassword;
        next();
    }
    catch(error){
        next(error);
    }
})

const User = model("User", userSchema);

module.exports = User;

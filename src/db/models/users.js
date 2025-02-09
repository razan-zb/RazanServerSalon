import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  phone: {  
    type: String,
    required: true, 
  },
  password: { 
    type: String,
    required: true,
    minlength: 6, // Optional: Minimum length for the password
  },
  aboutMeEn: { 
    type: String,
    required: false,
  },
  aboutMeAr: { 
    type: String,
    required: false,
  },
  aboutMeHe: { 
    type: String,
    required: false,
  },
  myVisionEn: { 
    type: String,
    required: false,
  },
  myVisionAr: { 
    type: String,
    required: false,
  },
  myVisionHe: { 
    type: String,
    required: false,
  },
  miroPhotos: [{
    type: String,
    required: false,
  }],
  profilePhoto:{
    type:String,
    require:false,
  } ,
  timeSlots: [
    {
      day: Number, // 0 for Sunday, 1 for Monday, etc.
      startTime: String, // Example: '13:00'
      endTime: String, // Example: '19:00'
    },
  ],

  
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
 
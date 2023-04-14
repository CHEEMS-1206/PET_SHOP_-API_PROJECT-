import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const rabbitSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  petName: {
    type: String,
    required: true,
  },
  petNickName : {
    type : String,
    required : false,
    default : '-',
  },
  petAge: {
    type: String,
    required: true,
  },
  petGender : {
    type :String,
    requyired : true,
  },
  petPrice: {
    type: Number,
    required: true,
  },
  petId: {
    type: Number,
    required: true,
  },
  petBio: {
    type: String,
    required: true,
  },
  petBreed : {
    type : String,
    required : true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  petPrevOwner : {
    type : String,
    default : 'None'
  }
});
const rabbitModel = mongoose.model("rabbitModel", rabbitSchema);
export default rabbitModel;

const mongoose = require("mongoose");

const eventShema = new mongoose.Schema({
  // tên sự kiện
  nameEvent: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  buyIn:{
    type : Number,
  }, 
  //nơi tổ chức
  venueEvent : {
    type: String
  }, 
  // ngày tổ chức
  dateEvent: {
    type : String
  },
  // tổng người tham gia event
  entries : {
    type : Number
  },
  tourementID: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Tourement"
  },
  pokerTourId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PokerTour",
  },
  pokerRoomId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  resultsPrize : {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Player",
          required: true,
        },
        playerName: String,
        place: Number,
        prize: Number,
      },
    ],
    default :[]
  },
  eventType: {
    type : String
  },
  createAt : {
   type : Date
  }
});

module.exports = mongoose.model("Event" ,eventShema);
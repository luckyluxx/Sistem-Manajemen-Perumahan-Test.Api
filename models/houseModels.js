const mongoose = require('mongoose');

const houseSchema = mongoose.Schema(
  {
    payments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment',
    }],
    housingNumber: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: String,
    },
    availability: {
      type: String,
      enum: ['Permanent', 'Temporary', 'Available'],
      default: 'Available', // Default status adalah Available
    },
  },
  {timestamps: true}
);

const House = mongoose.model('House', houseSchema);

module.exports = House;

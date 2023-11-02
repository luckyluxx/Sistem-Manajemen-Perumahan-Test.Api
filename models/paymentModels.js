const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
  {
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'House'
    },
    paymentType: {
      type: String,
      enum: ['Security', 'Cleaning',],
      required: true
    },
    amount:{
      type: Number,
      required: true
    },
    paymentStatus:{
      type: String,
      enum: ['paid', 'unpaid'],
      default: 'unpaid'
    },
    dueDate:{
      type: Date,
      required: true
    }
  },
  {timestamps: true}
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

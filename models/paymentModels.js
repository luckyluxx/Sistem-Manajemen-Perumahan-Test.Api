const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
  {
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'House'
    },
    securityPayment: {
      type: Object,
      default: {
        thisMonth: {
          type: Boolean,
          default: false,
        } ,
        previousMonth: {
          type: Boolean,
          default: false,
        },
        nextMonth: {
          type: Boolean,
          default: false,
        },
      }
    },
    cleaningPayment: {
      type: Object,
      default: {
        thisMonth: {
          type: Boolean,
          default: false,
        } ,
        previousMonth: {
          type: Boolean,
          default: false,
        },
        nextMonth: {
          type: Boolean,
          default: false,
        },
      }
    },
  },
  {timestamps: true}
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

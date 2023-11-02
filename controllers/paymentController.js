const House = require('../models/houseModels');
const Payment = require('../models/paymentModels');

const addPayment = async (req, res) => {
  try {
    const house = await House.findById(req.body.houseId);
    if (!house) {
      return res.status(400).json({ success: false, message: 'House not found' });
    }

    // set payment
    const payment = new Payment({
      house: req.body.houseId,
      paymentType: req.body.paymentType,
      amount: req.body.amount,
    });

    await payment.save();
    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ success: true, data: payments });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  create: addPayment,
  reads: getPayments,
  // create: createValue,
  // getMilestoneByProject: getMilestoneByProject,
};
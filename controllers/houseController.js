const House = require('../models/houseModels')

// monthly rakapitulation
const getMonthlySummary = async (req, res) => {
  try{

  } catch(err) {
    console.error(err)
    res.status(500).json({message: 'gagal mengambil rekap bulanan'})
  }
}

const addHouse = async (req, res) => {
  const {housingNumber, availability, payments} = req.body

  const  newHouse = new House({
    housingNumber,
    availability,
    payments,
  })

  try {
    // adding new house into the database
    await newHouse.save()

    // display json
    res.status(201).json({
      newHouse: newHouse,
      message: 'house added successfully'
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'gagal menambahkan data rumah'})
  }
}

const getAllHouses = async (req, res) => {
  try {
    const houses = await House.find()
    res.json(houses)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'gagal mendapatkan data rumah'})
  }
}

// menentukan pemilik rumah
const setHouseVacant = async (req, res) => {
  const {houseId, isVacant, owner} = req.body
  try{
    const house = await House.findByIdAndUpdate(houseId, {
      status: isVacant ? 'vacant' : 'occupied',
      owner: owner,
    })
    res.json({message: 'status rumah diperbarui dengan sukses'})
  }catch(err) {
    console.error(err)
    res.status(500).json({message: 'gagal memperbarui rekap rumah'})
  }
}

module.exports = {
  getMonthlySummary: getMonthlySummary,
  setHouseVacant: setHouseVacant,
  reads: getAllHouses,
  create: addHouse,
  // create: createValue,
  // getMilestoneByProject: getMilestoneByProject,
};
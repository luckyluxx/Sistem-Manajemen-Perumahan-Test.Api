const House = require('../models/houseModels')

// monthly rakapitulation
const addHouse = async (req, res) => {
  const {housingNumber, owner, availability, payments} = req.body

  const  newHouse = new House({
    housingNumber,
    owner,
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

// get all house data
const getAllHouses = async (req, res) => {
  try {
    const houses = await House.find()
    res.json(houses)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'gagal mendapatkan data rumah'})
  }
}

// get one house data by id
const getHouseByID = async (req, res) => {
  try {
    const house = await House.findById(req.params.id)

    if(!house){
      return res.status(404).json({message: 'rumah tidak ditemukan'})
    }
    
    res.json(house)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'gagal mendapatkan data rumah'})
  }
}

const deleteHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id)
    if(!house) {
      return res.status(404).json({message: 'rumaht tidak ditemukan'})
    }
    res.status(200).json({message: 'rumah berhasil dihapus'})
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'gagal menghapus rumah'})
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
  // getMonthlySummary: getMonthlySummary,
  setHouseVacant: setHouseVacant,
  read: getHouseByID,
  reads: getAllHouses,
  create: addHouse,
  delete: deleteHouse,
  // create: createValue,
  // getMilestoneByProject: getMilestoneByProject,
};
const router = require("express").Router();
const Property = require("../models/Property");


//CREATE

router.post("/",async (req, res) => {
  const newOrder = new Property(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id",async (req, res) => {
  try {
    const updatedOrder = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id",async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//find
router.get("/:id",async (req, res) => {
  try {
    const orders =await Property.findById(req.params.id)
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

 //GET ALL

router.get("/",async (req, res) => {
  try {
    const orders = await Property.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
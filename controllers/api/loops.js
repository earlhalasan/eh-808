const Loop = require("../../models/loop");

module.exports = {
  index,
  create,
  deleteLoop,
  editLoop,
  show,
};

async function index(req, res) {
  try {
    const loopList = await Loop.find({});
    res.json(loopList);
  } catch {
    res.status(400).json({ message: "Bad Serverside" });
  }
}

async function create(req, res) {
  try {
    const newLoop = await Loop.create(req.body);
    const loopList = await Loop.find({});
    loopList.push(newLoop);
    await catList.save();
  } catch (e) {
    res.status(400).json(e);
  }
}

async function deleteLoop(req, res) {
  try {
    const loop = await Loop.findByIdAndDelete(req.params.id);
    res.json(loop);
  } catch {
    res.status(400).json({ message: "Bad Serverside" });
  }
}

async function editLoop(req, res) {
  const loopList = await Category.findByIdAndUpdate(
    { _id: req.params.id },
    { title: req.body.title }
  );
}

async function show(req, res) {
  console.log("show");
  const loopList = await Loop.findById(req.params.id);
  res.json(loopList);
}

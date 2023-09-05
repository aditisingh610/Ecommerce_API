const mongoose = require("mongoose");

const MOGNODB_URI = `mongodb+srv://shubhamcdx:sscodeasexpertformongodball1290@cluster0.soagvli.mongodb.net/habitTracker?retryWrites=true&w=majority`;
mongoose.connect(MOGNODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

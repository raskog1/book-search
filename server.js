const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const routes = require("./routes");
const db = config.get("mongoURI");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

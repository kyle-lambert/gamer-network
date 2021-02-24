const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database.");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("useFindAndModify", false);

// Initial middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/api/authRoutes"));
app.use("/api/users", require("./routes/api/userRoutes"));
app.use("/api/profile", require("./routes/api/profileRoutes"));
app.use("/api/posts", require("./routes/api/postRoutes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

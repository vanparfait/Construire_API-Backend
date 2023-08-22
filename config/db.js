const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://danielle:danielle2023@cluster0.xybqyya.mongodb.net/FOKOU-biere",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit();
  }
};

module.exports = connectDB;

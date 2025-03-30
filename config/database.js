const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MongoDB URL:", process.env.MONGODB_URL); // Debugging

        await mongoose.connect(process.env.MONGODB_URL); // No need for options in Mongoose 6+
        console.log("✅ DB Connected Successfully");
    } catch (error) {
        console.error("❌ DB Connection Failed:", error.message);
        process.exit(1);
    }
};

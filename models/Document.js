const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);

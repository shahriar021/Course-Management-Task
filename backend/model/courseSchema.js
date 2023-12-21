const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  topics: {
    type: Array,
    items: {
      type: String,
    },
  },

  schedule: {
    type: Object,
    properties: {
      startDate: {
        type: String,
        format: Date,
      },
      endDate: {
        type: String,
        format: Date,
      },
      classDays: {
        type: Array,
        items: {
          type: String,
        },
      },
      classTime: {
        type: String,
      },
    },
  },
});

module.exports = mongoose.model("courses", courseSchema);

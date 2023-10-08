import mongoose from "mongoose";
const { Schema } = mongoose;

const missionSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  description: String,
  launchDate: String,
  properties: [
    {
      label: String,
      text: String,
    },
  ],
  body: [
    {
      heading: String,
      text: String,
    },
  ],
});

export default mongoose.models.Mission ||
  mongoose.model("Mission", missionSchema);

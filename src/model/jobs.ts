// src/models/job.model.ts
import mongoose, { Schema, Document } from "mongoose";

interface Skill {
  id: string;
  skill: string;
}

export interface JobDocument extends Document {
  jobTitle: string;
  company: string;
  experience: string;
  salary: string;
  education: string;
  workLocation: string;
  companyLocation: string;
  description: string;
  skills: Skill[];
}

const skillSchema = new Schema<Skill>(
  {
    id: { type: String, required: true },
    skill: { type: String, required: true }
  },
  { _id: false } // prevents Mongoose from adding its own _id to each skill
);

const jobSchema = new Schema<JobDocument>({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  experience: { type: String, required: true },
  salary: { type: String, required: true },
  education: { type: String, required: true },
  workLocation: { type: String, required: true },
  companyLocation: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [skillSchema], required: true }
});

const JobModel = mongoose.model<JobDocument>("Job", jobSchema);

export default JobModel;

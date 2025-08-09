// src/models/job.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface JobDocument extends Document {
  jobTitle: string;
  company: string;
  experience: string;
  salary: string;
  education: string;
  workLocation: string;
  companyLocation: string;
  description: string;
  skills: string[];
}

const jobSchema = new Schema<JobDocument>({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  experience: { type: String, required: true },
  salary: { type: String, required: true },
  education: { type: String, required: true },
  workLocation: { type: String, required: true },
  companyLocation: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
});

const JobModel = mongoose.model<JobDocument>("Job", jobSchema);

export default JobModel;

import { Schema } from 'mongoose';

export const LogSchema = new Schema({
    message: { type: String, required: true },
    level: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});
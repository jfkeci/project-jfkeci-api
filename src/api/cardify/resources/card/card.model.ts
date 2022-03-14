import mongoose, { Schema, model } from 'mongoose';
import Card from '@/cardify/resources/card/card.interface'

const CardSchema = new Schema({
    front: {
        type: String,
        required: true,
        maxLength: 255
    },
    back: {
        type: String,
        required: true,
        maxLength: 510,
    },
    tags: {
        type: [String],
        default: []
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    },
}, { timestamps: true })

export default model<Card>('Card', CardSchema);
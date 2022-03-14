import mongoose, { Schema, model } from 'mongoose';
import Person from '@/myurnum/resources/person/person.interface';

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 155
    },
    surname: {
        type: String,
        maxLengts: 155,
        default: ''
    },
    birthdate: {
        type: Date,
    },
    tags: {
        type: Array,
        default: []
    },
    info: {
        type: Array,
        default: []
    }
}, { timestamps: true });

export default model<Person>('Person', PersonSchema);
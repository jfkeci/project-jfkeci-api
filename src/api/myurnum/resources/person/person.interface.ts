import { Document } from 'mongoose';

export default interface Card extends Document {
    name: string;
    surname: string;
    birthdate: string;
    tags: Array<object>;
    info: Array<object>;
}
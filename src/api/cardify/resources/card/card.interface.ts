import { Document } from 'mongoose';

export default interface Card extends Document {
    front: string;
    back: string;
    tags: Array<string>;
    createdBy: string;
}


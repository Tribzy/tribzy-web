import mongoose, { Schema, Document } from "mongoose";

interface ISubscription extends Document {
    email: string;
    createdAt: Date;
}


const SubscriptionSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
}, { collection: 'tribzy-subscribers' });

const Subscription = mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', SubscriptionSchema);

export default Subscription;

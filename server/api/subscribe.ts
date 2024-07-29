import { defineEventHandler, readBody } from 'h3'
import Subscription from '~/types/subscription';
import mongoose from 'mongoose';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email } = body;
    const config = useRuntimeConfig();

    try {
        await mongoose.connect(config.mongoDbUri);

        console.log('Connected to MongoDB', config.mongoDbUri);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

    try {
        const subscription = new Subscription({ email });

        await subscription.save();

        return {
            success: true,
            message: 'Subscription successful!',
            data: subscription,
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            success: false,
            message: 'Subscription failed!',
        };
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
})

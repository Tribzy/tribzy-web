import { defineEventHandler, readBody } from 'h3'
import Subscription from '~/types/subscription'

export default defineEventHandler(async (event) => {

    try {
        const subscribers = await Subscription.find().exec();

        return {
            success: true,
            data: subscribers,
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            success: false,
            message: 'Failed to fetch subscribers',
        };
    }
})

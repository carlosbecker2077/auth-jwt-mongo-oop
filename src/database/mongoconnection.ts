import mongoose from 'mongoose';

export class MongoConnection {
    static async createConnection(mongoUri: string) {
        try {
            await mongoose.connect(mongoUri);
            console.log('Connected to Mongo!');
        } catch (error) {
            console.log('Error in connection database: ' + error);
        }
    }
}

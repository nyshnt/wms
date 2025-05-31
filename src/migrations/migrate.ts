import mongoose from 'mongoose';
import { config } from 'dotenv';
import * as createUsers from './001-create-users';

// Load environment variables
config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/localtestdb';

async function migrate() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Get migration direction from command line args
        const direction = process.argv[2] || 'up';
        
        if (direction === 'up') {
            console.log('Running up migration...');
            await createUsers.up(mongoose.connection);
        } else if (direction === 'down') {
            console.log('Running down migration...');
            await createUsers.down(mongoose.connection);
        } else {
            console.error('Invalid migration direction. Use "up" or "down"');
            process.exit(1);
        }

        console.log('Migration completed successfully');
        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        await mongoose.disconnect();
        process.exit(1);
    }
}

migrate(); 
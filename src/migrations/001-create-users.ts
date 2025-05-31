import { Connection } from 'mongoose';

export const up = async function (connection: Connection) {
    try {
        const db = connection.db;

        // Check if collection already exists
        const collections = await db.listCollections({ name: 'users' }).toArray();
        if (collections.length > 0) {
            console.log('Users collection already exists, skipping creation');
            return;
        }

        // Create the collection with schema validation
        await db.createCollection('users', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['email', 'name', 'password'],
                    properties: {
                        email: {
                            bsonType: 'string',
                            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                        },
                        name: {
                            bsonType: 'string'
                        },
                        password: {
                            bsonType: 'string'
                        },
                        createdAt: {
                            bsonType: 'date'
                        }
                    }
                }
            }
        });

        // Create unique index on email
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
        console.log('Successfully created users collection with validation and indexes');
    } catch (error) {
        console.error('Error in migration up:', error);
        throw error;
    }
};

export const down = async function (connection: Connection) {
    try {
        const db = connection.db;
        await db.collection('users').drop();
        console.log('Successfully dropped users collection');
    } catch (error) {
        console.error('Error in migration down:', error);
        throw error;
    }
}; 
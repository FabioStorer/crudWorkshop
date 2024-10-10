import db from 'mongoose';

(async () => {
    try {
        await db.connect(process.env.MONGODB);
        console.log('Successfully connected to database');
    } catch (error) {
        console.log(error);
    }
})();
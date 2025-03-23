const pool = require('./src/db');  // Go inside 'src' folder

async function testDB() {
    try {
        const [rows] = await pool.query('SELECT NOW() AS now');
        console.log('Connected to database:', rows[0]);
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

testDB();

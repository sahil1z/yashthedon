const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sahil',
    database: 'kisanbazaar'
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if the user already exists
        const [rows] = await db.query('SELECT * FROM users WHERE google_id = ?', [profile.id]);
        
        if (rows.length > 0) {
            // User exists, return user
            return done(null, rows[0]);
        } else {
            // User does not exist, create a new user
            const [result] = await db.query(
                'INSERT INTO users (name, email, google_id, hashedPassword) VALUES (?, ?, ?, ?)',
                [profile.displayName, profile.emails[0].value, profile.id, 'defaultHash']  // Use 'defaultHash' or another default value
            );
            const newUser = { 
                id: result.insertId, 
                name: profile.displayName, 
                email: profile.emails[0].value, 
                google_id: profile.id 
            };
            return done(null, newUser);
        }
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        done(null, rows[0]);
    } catch (error) {
        done(error, null);
    }
});

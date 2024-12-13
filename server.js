// File: server.js
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());

// Konfigurasi Supabase
const supabaseUrl = 'https://tljouetrefmmrizpyppx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsam91ZXRyZWZtbXJpenB5cHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNzg0MDgsImV4cCI6MjA0OTY1NDQwOH0.ToL-Qa614c13u1XRzJv9nopq2KZUvhYjxJBetnSPvrY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint untuk mendapatkan data menu
app.get('/menu', async (req, res) => {
    try {
        const { data, error } = await supabase.from('menu').select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

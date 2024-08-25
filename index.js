const express = require('express');
const app = express();

app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = "your_name_ddmmyyyy";
    const email = "your_college_email";
    const roll_number = "your_roll_number";

    let numbers = [];
    let alphabets = [];
    let highest_lowercase = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === "string") {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highest_lowercase) {
                highest_lowercase = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highest_lowercase ? [highest_lowercase] : []
    };

    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}.`); 
});

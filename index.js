const axios = require('axios');
const fs = require('fs');

// API request using axios
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        
        fs.writeFile('result/posts.txt', JSON.stringify(response.data), (err) => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err)
    });
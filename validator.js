const fs = require('js');

function isValidJson(filePath) {
    try {
        const data = fs.readFileSync(filePath);

        if (data.trim().length === 0) {
            console.log('The file is empty.');
            return false; // Return false because the file is empty
        }

        JSON.parse(data);
        return true;
    }
}
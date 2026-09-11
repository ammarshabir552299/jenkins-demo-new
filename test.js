const fs = require('fs');

if (fs.existsSync('app.js')) {
    console.log('TEST PASSED: app.js exists');
    process.exit(0);
} else {
    console.error('TEST FAILED: app.js does not exist');
    process.exit(1);
}

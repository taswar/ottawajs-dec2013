var page = require('webpage').create(),
    system = require('system'),
    url, base64;

if (system.args.length === 1) {
    console.log('Usage: screenshot.js <some URL>');
    phantom.exit();
}

url = system.args[1];
page.viewportSize = { width: 800, height: 600 };
page.open(url, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the url');
    } else {
        page.clipRect = { top: 0, left: 0, width: 800, height: 600 };
        base64 = page.renderBase64('PNG');        
        console.log(base64);
    }
    phantom.exit();
});

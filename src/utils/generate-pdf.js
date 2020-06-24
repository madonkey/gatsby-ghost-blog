const puppeteer = require(`puppeteer`);

(async () => {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(`http://localhost:9000/cvraw/`);
    // page = page.$(`#cv`);
    await page.pdf({
        path: `./public/dermot-cv.pdf`, // path (relative to CWD) to save the PDF to.
        format: `A4`,
    });
    await browser.close();
})();
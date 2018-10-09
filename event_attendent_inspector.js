// go to the page
// click about
// count users who joined
// https://blog.badalic.com/automating-facebook-replies-with-puppeteer

const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://www.facebook.com/events/831961607000146/?active_tab=about");
    // await page.waitFor(112000);

    // const text = page.evaluate(() => document.querySelector('.scrape').textContent);


})();
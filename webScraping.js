const puppeteer = require('puppeteer');

(async () => {
    console.log("here");
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-setuid-sandbox"],
    'ignoreHTTPSErrors': true
});
  const page = await browser.newPage();

  await page.goto('https://www.coursera.org/courses');

  // Type into search box.
//   await page.type('.devsite-search-field', 'Headless Chrome');


  // Wait for the results page to load and display the results.
  const resultsSelector = '.cds-71.ais-InfiniteHits-list.css-0.cds-72';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  await page.evaluate((resultsSelector) => {
    const arr = document.querySelectorAll("li");
    console.log("====",arr);
  });
//   console.log(page);

  // Print all the files.
  

//   await browser.close();
})();
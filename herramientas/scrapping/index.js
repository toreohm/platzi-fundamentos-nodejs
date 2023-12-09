const puppeteer = require("puppeteer");

//puppeteer funciona de manera asincrona

(async () => {
    console.log("Lanzamos navegador.");
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto("https://hectormaluy.w3spaces.com");

    let titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        console.log(h1.innerHTML);

        return h1.innerHTML;
    });
    console.log("titulo: " +  titulo1);
    console.log("cerramos navegador...");
    //browser.close();
    console.log("Navegador cerrado");
})();
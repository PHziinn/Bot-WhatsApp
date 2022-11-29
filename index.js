const puppeteer = require("puppeteer");

(async function main(){
    try{
        
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

        await page.goto("https://web.whatsapp.com/");

        await page.waitForSelector("._1RAKT");
        await deley(5000);

        const contactName = ""; //--- Nome do Contato
        await page.click(`span[title='${contactName}']`);
        await page.waitForSelector("._3RGKj");

        const editor = await page.$("div[tabindex='-1']");
        await editor.focus();

        const amountOfMessages = 5;

        for ( let i = 0; i < amountOfMessages; i++){
            await page.evaluate(() => {
                const message = "";   //---- Mensagem
                document.execCommand("insertText", false, message);
              });
            await page.click("span[data-testid='send']");
            await deley(500);
        }

        
    } catch (e) {
        console.log("error", e);
    }
})();

function deley(time){
    return new Promise(function (resolve){
        setTimeout(resolve, time);
    })
}

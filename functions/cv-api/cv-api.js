const chromium = require("chrome-aws-lambda");

const handler = async (event) => {
  let browser;
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      executablePath: process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(`${process.env.PORTFOLIO_ADDRESS}/${event.queryStringParameters.lang}/cv`, {
      waitUntil: "networkidle2",
    });

    await page.evaluateHandle("document.fonts.ready");
    await page.waitForTimeout(500);
    await page.emulateMediaType("print");

    const pdfBuffer = await page.pdf({ format: "a4" });

    await browser.close();
    return {
      headers: {
        "Content-type": "application/pdf",
      },
      statusCode: 200,
      body: pdfBuffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  } finally {
    if (browser !== null) await browser.close();
  }
};

module.exports = { handler };


import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays bots to choose', async () => {
    await driver.findElement(By.id('draw'))
    driver.sleep(1000)

    const choices = await driver.findElement(By.className('bot-card'))

    expect(choices.isDisplayed()).toBe(true)
})
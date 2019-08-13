/**
 * xl_pup wait
 * @author Xiaolong
 */

import {log, error} from './utils'
import chalk from 'chalk'

export const dispatchNext = async (path, type = 'click', option = {}) => {
    const {PAGE} = global
    const {text = null, count = null} = option
    let msg = `${chalk.green(path)}_${chalk.cyan(type)}`
    if (text) msg = `${msg}_${chalk.blue(text)}`
    if (count) msg = `${msg}_${chalk.grey(count)}`
    console.log(msg)
    await PAGE.waitForXPath(path)
    let element = await PAGE.$x(path)
    element = element[0]
    switch (type) {
        case 'click':
            await element.click()
            break;
        case 'input':
            const {delay = 100} = option
            await element.focus();
            await element.type(text, {delay});
            break;
        case 'delete':
            await element.focus();
            for (let i = count; i--; i > 0) {
                await PAGE.keyboard.down('Backspace');
                await PAGE.keyboard.up('Backspace')
                await wait(300)
            }
            break;
        case 'enter':
            await element.focus();
            let s = 0
            while (s < text.length) {
                await PAGE.keyboard.down(text[s]);
                await PAGE.keyboard.up(text[s])
                await wait(300)
                s += 1
            }
            break;
        case 'focus':
            await element.focus();
            break;
        case 'check':
            const eleText = await (await element.getProperty('innerHTML')).jsonValue()
            if (text && eleText === text) {
                console.log(chalk.green(`check__${text}:`) + chalk.blue('success'))
            } else {
                console.log(chalk.green(`check__${text}:`) + chalk.red('error'))
            }
            break;
        default:
            break;
    }
}

const wait = async (time = 500) => {
    const {PAGE} = global
    await PAGE.waitFor(time);
}

const nextStep = null;
export const waitXpath = async (xpath, option, time = 0) => {
    const {PAGE} = global
    await wait(time)
    await PAGE.waitForXPath(xpath)
    await dispatchNext(xpath, 'click', {})
}
// export const waitXpath = async (paths, time = 0) => {
//     const {PAGE} = global
//     await wait(time)
//     for (let i = 0; i++; i < paths.length) {
//         const item = paths[i];
//         const {path, type} = item
//         const itemNext = paths[i + 1] || null;
//         await dispatchNext(path, type, item)
//         if (itemNext) await PAGE.waitForXPath(itemNext.path)
//     }
// }


export default wait;

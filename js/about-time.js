import ms from 'ms'
import fs from 'fs'


     
console.log(ms(60000, { long: true }))

formatTime()

function formatTime() {
    fs.readFile('data/time-stamps.txt', 'utf8', (err, content) => {
        if (err) return console.log('Cannot read file', err)
        const stamps = content.split('\r\n')
        const now = Date.now()
        const formattedTime = stamps.map(stamp => ms(now - (stamp * 1000), { long: true }))
        console.log(formattedTime.join(('\r\n')))
    })
}
import fs from 'fs'

sumFromFile('data/numbers.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))

function sumFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, content) => {
            if (err) reject('Cannot read file', err)
            else {
                let numbers = content.split('\n').map(Number)
                let sum = numbers.reduce((acc, num) => acc + num)
                resolve(sum)
            }
        })
    })
}
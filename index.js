var fs = require('fs')
var array = fs.readFileSync('russian_nouns.txt').toString().split('\n')
// var array = ['димка', 'литка', 'гошка', 'катька', 'люпка']

let size = 7
let no = 'пла'.split('')
let yes = 'ос'.split('')
let mask = ['*', '*', '*', '*', '*', '*']

array.forEach(el => {
  if (el.length == size) {
    word = el.split('')
    const NOchecker = value => !no.some(element => el.includes(element))
    if (word.filter(NOchecker).length) {
      const YESchecker = value => yes.every(element => el.includes(element))
      console.log(el)

      if (word.filter(YESchecker).length) {
        let maskValid = true
        for (let i = 0; i < mask.length; i++) {
          if (mask[i] != '*') {
            if (word[i] != mask[i]) {
              return
            }
          }
        }

        console.log(el)
      }
    }
  }
})

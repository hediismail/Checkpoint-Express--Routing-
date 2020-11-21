const express = require('express')

const app = express()

app.use((req, res, next) => {
  const date = new Date()
  let day = date.toDateString().slice(0, 3)
  let hour = date.toTimeString().slice(0, 2)
  let state = false
  switch (day) {
    case 'Mon':
    case 'Tue':
    case 'Wed':
    case 'Thu':
    case 'Fri':
      state = true
  }
  if (state === true && hour >= 9 && hour <= 17) {
    next()
  } else res.end('Le site est hors service')
})

app.use(express.static('public'))

app.listen(5000, (err) => {
  if (err) {
    throw err
  } else {
    console.log('server is running')
  }
})

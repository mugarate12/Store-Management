import app from './app'
import { createConnection } from 'typeorm'

createConnection()
  .then(connection => {
    app.listen(3333, () => {
      console.log('\nListening on port 3333')
    })
  })
  .catch(error => console.log(error))

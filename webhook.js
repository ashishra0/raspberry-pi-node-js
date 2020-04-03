const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/mQAzpDaQKOQpXyr0',
  target: 'http://localhost:3000/',
  logger: console
})

const events = smee.start()
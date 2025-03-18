import fastify from 'fastify' // importando


const app = fastify()

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HtTP server runing!!!')


  }) // ouvir uma porta P

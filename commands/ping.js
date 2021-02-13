module.exports = {
  name: 'ping',
  description: 'See my connection to the API',
  async execute (client, message, args) {
    let color = '0x0099ff'
    if (client.ws.ping > 100) color = '0xff0000'

    let Ping = {
      title: 'Ping:'
      color: color
      description: client.ws.ping
    }

    message.reply({ embed: Ping })
  },
}

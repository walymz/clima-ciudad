const argv = require('yargs')
    .options({
        ciudad: {
            alias: 'c',
            demand: true,
            desc: 'Ciudad a la cual se requiere obtener el clima'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
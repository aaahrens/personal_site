require('ignore-styles');
require('babel-register')({ignore: /\/(build|node_modules)\//, presets: ['es2015', 'react-app', 'stage-2']})

const server = require('./server/server');

const PORT = process.env.PORT || 3001;

// Why don't I need http createServer
server.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`)
});

var express = require('express')
var ejs = require('ejs')
var engine = require('ejs-mate')
var bodyParser = require('body-parser')
var helpers = require('express-helpers')
var morgan = require('morgan')
 
var app = express()
var PORT = 3141


app.set('view engine', 'ejs')
app.engine('ejs', engine)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use(morgan('short', {}))


app.get('/', function (req, res) {
	let hello = 'Darling'
 	res.render('hello', {'hello': hello})
})

app.get('/:name', function (req, res) {
	res.render('hello', {'hello': req.params.name})
})

app.listen(PORT, function() {
	console.log("server is running: http://localhost:" + PORT)
})
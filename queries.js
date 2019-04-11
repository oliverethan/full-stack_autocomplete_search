const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'a10Ethan',
  port: 5432,
})
const getSuggestions = (request, response) => {

  var suggestion = request.query.suggestion;

  console.log(suggestion);

  var querystring = 'SELECT * FROM suggestions WHERE name LIKE \'' + suggestion + '%\' ORDER BY id ASC'


  pool.query( querystring, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getSuggestions,
}
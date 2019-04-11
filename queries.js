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

  var querystring = 'SELECT * FROM suggestions WHERE name ILIKE \'' + suggestion + '%\' ORDER BY suggestion_id ASC'


  pool.query( querystring, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDrug = (request, response) => {

  var d_id = request.query.d_id;

  console.log(d_id);

 // var querystring = 'select d.*, m.name from drugs d join mechanismof mo on d.d_id = mo.d_id join mechanisms m on m.m_id = mo.m_id where d.d_id =' + d_id +';'


var querystring = 'select m.name as m_name, d.*  from drugs d join mechanismof mo on d.d_id = mo.d_id join mechanisms m on m.m_id = mo.m_id where d.d_id =' + d_id + ';'



  pool.query( querystring, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDruglist = (request, response) => {

  var m_id = request.query.m_id;

  console.log(m_id);

  var querystring = 'select d.d_id ,d.name  from drugs d join mechanismof mo on d.d_id = mo.d_id ' +
                                                        'join mechanisms m on m.m_id = mo.m_id and m.m_id =' + m_id;


  pool.query( querystring, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}





module.exports = {
  getSuggestions,
  getDrug,
  getDruglist,
}
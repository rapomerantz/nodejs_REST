const Pool = require('pg').Pool;
const pool = new Pool ({
    host: 'localhost',
    database: 'nodejs_REST',
    password: 'password',
    port: 5432
})

pool.on('connect', (client) => {
    console.log('postgres connected!');
})

pool.on('error', (err, client) => {
    console.log('Unexpected Error on Postgresql', err);
    process.exit(-1);
  });

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    getUserById
  }
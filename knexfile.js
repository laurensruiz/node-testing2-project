// // DO NOT CHANGE THIS FILE
// const sharedConfig = {
//     client: 'sqlite3',
//     //sqlite3
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//         directory: './data/seeds',
//       },
//     //sqlite3
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done)
//       },
//     },
//   }
  
//   module.exports = {
//     development: {
//       ...sharedConfig,
//       connection: { filename: './data/jokes.db3' },
//     },
//     testing: {
//       ...sharedConfig,
//       connection: { filename: './data/jokes.test.db3' },
//     },
//     production: {

//     }
//   }

  module.exports = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: { 
            filename: './data/jokes.db3' 
    },
    migrations: {
        directory: './data/migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
  },
    testing: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: { 
            filename: './data/test.db3' 
    },
    migrations: {
        directory: './data/migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
  }
}
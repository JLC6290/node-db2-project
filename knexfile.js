// Update with your config settings.

// module.exports = {

//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: "./data/car-dealer.db3",
//     },
//     useNullAsDefault: true,
//   },
// };


module.exports = {
  development: {
    client: "sqlite3", //driver to use
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true, //required for sqlite
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

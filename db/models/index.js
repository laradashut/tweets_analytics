// const db = require('../../db');
//
// module.exports = {
//   tweets: {
//     getAllTweets = (cb) => {
//       const query = knex.select(*).from('tweets');
//         db.query(query, (err, results) => {
//           cb(err, results);
//         })
//     },
//     getTweetsByBrand = (brand, cb) => {
//       const query = knex.select(*).from('tweets').where('text', 'like', `%${brand}%`);
//     }
//   },
//   brands: {
//     getAllBrands = (cb) => {
//       const query = knex.select(*).from('brands');
//         db.query(query, (err, results) => {
//           cb(err, results);
//         })
//     }
//   }
// }

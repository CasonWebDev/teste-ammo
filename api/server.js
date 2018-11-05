let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
const PORT = process.env.PORT || 3001;

let pool = new pg.Pool({
    port: 5432,
    password: '1234',
    database: 'mmartan_products',
    max: 10,
    host: 'localhost',
    user: 'postgres'
});

// let items = [
//     'img1.jpg',
//     'img2.jpg',
//     'img3.jpg',
//     'img4.jpg',
//     'img5.jpg',
//     'img6.jpg',
//     'img7.jpg',
//     'img8.jpg',
//     'img9.jpg',
//     'img10.jpg'
// ]

// pool.connect((err, db, done) => {
//     if(err){
//         console.log(err);
//     }else{
//         for(i=5;i<51;i++){
//             var path = items[Math.floor(Math.random()*items.length)];
//             console.log(path+ '-' +i);
//             db.query("INSERT INTO product_images (image_path, product_id) VALUES ($1, $2)",[path,i],(err, table) => {
//                 done();
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log(table)
//                 }
//             })
//         }
//     }
// });

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(morgan('dev'));

app.use(function(req, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/products', function(req,response){
    pool.connect((err, db, done) => {
        if(err){
            response.status(400).send(err);
        }else{
            db.query("SELECT p.*, string_agg(DISTINCT i.image_path,':') as images FROM products p, product_images i WHERE p.id_product = i.product_id GROUP BY p.id_product",(err, table) => {
                done();
                if(err){
                    response.status(400).send(err)
                }else{
                    response.status(201).send(table.rows)
                }
            })
        }
    });
});

app.listen(PORT,() => console.log('LISTENING ON PORT ' + PORT));
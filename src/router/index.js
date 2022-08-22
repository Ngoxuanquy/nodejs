const newRouter = require('./new');
const homeRouter = require('./silte');
const chitietRouter = require('./chitiet');
const giohangRouter = require('./giohang');
const updateRouter = require('./update');
const timkiemRouter = require('./timkiem');







function route(app){
 
        app.use('/', updateRouter);
        app.use('/new', newRouter);
        app.use('/chitiet', chitietRouter);
        app.use('/giohang', giohangRouter);
        app.post('/timkiem', timkiemRouter);


        
        app.use('/', homeRouter);
      
        }

module.exports = route;
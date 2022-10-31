const express = require('express');
const router = express.Router()
const conexion = require('./base_de_datos/bd');

router.get('/', (req, res)=>{
   res.render('index');      
   
      conexion.query ('SELECT * FROM users', (error, results)=>{
      if(error){
         throw error;
      
         
      }else{
         res.render('profesores',{results:results});
      }
   })

})
if(router.get('/', (req, res)=>{
   res.render('index.html');}))

router.get('/create', (req, res)=>{
   res.render('create');
});

router.get('/edit/:id', (req, res)=>{
   const id = req.params.id;
   conexion.query('select * from users where id=?',[id],(error, results)=>{
      conexion.query ('SELECT * FROM users', (error, results)=>{
         if(error){
            throw error;
         
            
         }else{
            res.render('edit',{user:results[0]});
         }
})
})

router.get('/delete/:id', (req, res)=>{
   const id = req.params.id
   conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
      if(error){
         throw error;
      
         
      }else{
         res.render('/',{user:results[0]});
      }
   })
})



const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

   







module.exports = router

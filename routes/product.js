var express =  require("express");
var router =  express();
var mysql = require("mysql");



var connection =  mysql.createConnection({
    host: '172.17.0.1',
    user: 'root',
    password: 'root',
    database:'myapp_db',
    //enter forwarded port of mydb container of mysql:5.7 of database
    port:9099 
});
connection.connect();
router.use(express.json());

router.get("/",(request, response)=>{
    var queryText = "select * from category";
    
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});



router.post("/",(request, response)=>{
   
          var title = request.body.title;
            var description = request.body.description;
            

            var queryText = `insert into category(title,description) values('${title}', '${description}')`;
            connection.query(queryText,(err, result)=>{
            if(err==null)
                {
                    response.send(JSON.stringify(result));
                }
                else{
                    response.send(JSON.stringify(err));
                }
        });
   
});




module.exports = router;




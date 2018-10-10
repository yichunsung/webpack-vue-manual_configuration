/*

	Require the packages

*/

// 載入Express 套件
let express = require("express");


let app = express();

/*

載入靜態頁面

*/
app.use(express.static(__dirname +"/dist"));


// 首頁
app.get('/', function(req, res){
	res.sendFile(__dirname+'/dist/index.html');
	//console.log(req.session);
	//res.send(req.session);
});

// ================================================================

// 啟動伺服器在 http://localhost:3000/

let port = process.env.PORT || 8888;

app.listen(port, function(){
	console.log("Start")
});
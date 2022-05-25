const express = require("express");

let app = express();
app.use(express.json());

//DATABASE
let database = [];
let id = 1;
let port = process.env.PORT || 3001;

//REST API
app.get("/api/deal",function(req,res) {
	return res.status(200).json(database);
});

app.post("/api/deal",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Bad request"});
	}
	if(!req.body.sellersName) {
		return res.status(400).json({message:"Bad request"});
	}
	let item = {
		...req.body,
		id:id
	}
	id++;
	database.push(item);
	return res.status(201).json({message:"created"});
});

app.delete("/api/deal/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1);
			return res.status(200).json({message:"success"})
		}
	}
	return res.status(404).json({message:"not found"})
});

app.put("/api/deal/:id",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Bad request"});
	}
	if(!req.body.sellersName || !req.body.consultsName || !req.body.tradersName || !req.body.endCustomer || !req.body.numberOfHours || !req.body.paymentTerm || !req.body.startingDate || !req.body.duration || !req.body.contactPerson || !req.body.subcontractorInfo || !req.body.subcontractorsName || !req.body.purchasePrice || !req.body.equipments) {
		return res.status(400).json({message:"Bad request"});
	}
	let tempId = parseInt(req.params.id,10);
	let item = {
		...req.body,
		id:tempId
	}
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1,item);
			return res.status(200).json({message:"success"})
		}
	}
	return res.status(404).json({message:"not found"})
})

app.listen(port);

console.log("Running in port",port);

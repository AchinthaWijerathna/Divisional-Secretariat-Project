const router = require('express').Router();
let Request = require('../models/Request.model');


//retrive all data in database
router.route('/').get((req, res) => {
    Request.find()
        .then(Request => res.json(Request))
        .catch(Request => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Requestname = req.body.Requestname;
    const nic = req.body.nic;
    const name = req.body.name;
    const contacnumber = req.body.contacnumber;
    const problemTopic = req.body.problemTopic;
    const problem = req.body.problem;
    const address = req.body.address;
    const date = req.body.date;



  const newRequest = new Request({
    Requestname,
    nic,
    name,
    contacnumber,
    problemTopic,
    problem,
    address,
    date,
});

//get data in form AND save it to database

    newRequest.save()
        .then(() => res.json('Request added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Request.findById(req.params.id)
        .then(Request => res.json(Request))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Request.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Request.findById(req.params.id)
        .then(Request => {
            Request.Requestname = req.body.Requestname;
            Request.nic = req.body.nic;
            Request.contacnumber = req.body.contacnumber;
            Request.problemTopic = req.body.problemTopic;
            Request.problem = req.body.problem;
            Request.address = req.body.address;
            Request.date = req.body.date;
            Request.save()
                .then(() => res.json('Request updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
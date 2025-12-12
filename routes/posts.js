const express = require('espress');

const router = express.Router();

router.get('/', (req, res)=>{


    res.send('Posts List', {users:users});

});

router.get('/new', (req, res)=>{


    res.send('Create new Post');

});

module.exports = router;


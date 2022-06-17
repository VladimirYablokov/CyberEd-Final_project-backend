const router = new require('express')();

const {findBooks, findPartners, findSkills, findArticles} = require("../controllers/controller");

router.get('/books', findBooks);
router.get('/partners', findPartners);
router.get('/skills', findSkills);
router.get('/articles', findArticles);

module.exports = router
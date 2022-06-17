const router = new require('express')();

const {Books, Partners, Skills, Articles} = require("../controllers/controller");

router.get('/books', Books);
router.get('/partners', Partners);
router.get('/skills', Skills);
router.get('/articles', Articles);

module.exports = router
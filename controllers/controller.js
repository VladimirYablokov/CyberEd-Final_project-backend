const {AuthorBook, OurPartner, Skill, Article} = require('../models/models');

class Controllers {
    async Books(req, res){
        const books = await AuthorBook.findAll();
        return res.send(books)
    }

    async Partners(req, res){
        const partners = await OurPartner.findAll();
        return res.send(partners)
    }

    async Skills(req, res){
        const skills = await Skill.findAll();
        return res.send(skills)
    }

    async Articles(req, res){
        const articles = await Article.findAll();
        return res.send(articles) 
    }
}

module.exports = new Controllers();
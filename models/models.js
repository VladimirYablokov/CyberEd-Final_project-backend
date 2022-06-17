const sequelize = require('../db')
const {DataTypes} = require('sequelize');
const {INTEGER, STRING} = DataTypes;

const AuthorBook = sequelize.define('AuthorBook', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false},
    price: {type: STRING, allowNull: false},
    comment: {type: STRING, allowNull: false},
    type: {type: STRING, allowNull: false},
    picture: {type: STRING, allowNull: false},
})

const OurPartner = sequelize.define('OurPartner', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    logo: {type: STRING, allowNull: false},
    name: {type: STRING, allowNull: false},
    comment: {type: STRING, allowNull: false},
})

const Skill = sequelize.define('Skill', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: STRING, allowNull: false},
    text: {type: STRING, allowNull: false},
})

const Article = sequelize.define('Article', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false},
    comment: {type: STRING, allowNull: false},
    date: {type: STRING, allowNull: false},
    picture: {type: STRING, allowNull: false},
})

module.exports = {AuthorBook, OurPartner, Skill, Article}
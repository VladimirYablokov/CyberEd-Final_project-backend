const sequelize = require('../db')
const {DataTypes} = require('sequelize');
const {INTEGER, STRING} = DataTypes;

const AuthorBook = sequelize.define('AuthorBook', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false},
    price: {type: STRING, allowNull: false},
    comment: {type: STRING, allowNull: false},
    typeBook: {type: STRING, allowNull: false},
    picture: {type: STRING, allowNull: false},
})

const OurPartners = sequelize.define('OurPartners', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    logo: {type: STRING, allowNull: false},
    name: {type: STRING, allowNull: false},
    comment: {type: STRING, allowNull: false},
})

const Skills = sequelize.define('Skills', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    numberSkill: {type: STRING, allowNull: false},
    text: {type: STRING, allowNull: false},
})

const Articles = sequelize.define('Articles', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false},
    comment: {type: STRING, allowNull: false},
    date: {type: STRING, allowNull: false},
    picture: {type: STRING, allowNull: false},
})

module.exports = {AuthorBook, OurPartners, Skills, Articles}
const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexao.bancodedados')


const Relogios = sequelize.define('Relogios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desenvolvedora: {
        type: Sequelize.STRING
    },
    nota: {
        type: Sequelize.FLOAT
    }
});

const Usuarios = sequelize.define('Usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


async function gerarModelUsuarios() {
    await Usuarios.sync();
}

async function gerarModelRelogios() {
    await Jogos.sync();
}
 
async function gerarModelPlataformas() {
    await Plataformas.sync();
}

sequelize.sync()
 
gerarModelUsuarios();
gerarModelPlataformas();
gerarModelRelogios();

Plataformas.hasMany(Relogios, { foreignKey: 'plataforma_id' });
Relogios.belongsTo(Plataformas, { foreignKey: 'plataforma_id' });

module.exports = {Plataformas, Relogios, Usuarios};
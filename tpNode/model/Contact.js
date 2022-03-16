
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Contact", {
        id: DataTypes.STRING,
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        adresse: DataTypes.STRING,
        email: DataTypes.STRING,
        telephone: DataTypes.STRING
    });
};
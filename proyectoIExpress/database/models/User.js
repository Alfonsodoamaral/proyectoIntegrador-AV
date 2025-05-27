module.exports = function (sequelize, dataTypes) {
    let alias = "User"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha : {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE  
        },
        updateddAt: {
            type: dataTypes.DATE  
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps:true,
        underscored: false,
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "Producto",
            foreignKey: "usuario_id"
        });
        User.hasMany(models.Comentario, {
            as: "Comentario",
            foreignKey: "id_usuario"
        });
    }


    return User;
}
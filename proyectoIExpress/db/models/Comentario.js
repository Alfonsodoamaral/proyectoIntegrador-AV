module.exports = function(sequelize, dataTypes){
    let alias = "Comentario"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER
        },
        texto_comentario: {
            type: dataTypes.STRING(200)
        },
        createdAt: {
            type: dataTypes.DATE  
        },
        updateAt: {
            type: dataTypes.DATE  
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName : "comentarios",
        timestamps:true,
        underscored: true,
    };

    const Comentario = sequelize.define(alias, cols, config);

    return Comentario;
}
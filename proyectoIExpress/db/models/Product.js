module.exports = function(sequelize, dataTypes){
    let alias = "Producto"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        nombre_foto_producto: {
            type: dataTypes.STRING
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion_producto: {
            type: dataTypes.STRING
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
    };

    let config = {
        tableName : "productos",
        timestamps:true,
        underscored: true,
    };

    
    const Producto = sequelize.define(alias, cols, config);

    return Producto;

}
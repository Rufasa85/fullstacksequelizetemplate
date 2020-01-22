module.exports = function(sequelize, DataTypes) {
    var Thing = sequelize.define('Thing', {
        // add properites here
        todo: DataTypes.STRING
    });

    Thing.associate = function(models) {
        // add associations here
        Thing.belongsTo(models.User);
    };

    return Thing;
};
exports.initialize = function (sequelize) {
    var Sequelize = require('sequelize');

    var Note = sequelize.define('note', {
      id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
      },
      text: {
        type: Sequelize.STRING,
        field: 'text' // Will result in an attribute that is firstName when user facing but first_name in the database
      }
    }, {
      freezeTableName: true // Model tableName will be the same as the model name
    });

    return Note;
}
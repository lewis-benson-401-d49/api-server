'use strict';

module.exports = (SQLDb, DataTypes) => {
  return SQLDb.define('foods', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

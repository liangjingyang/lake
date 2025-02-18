'use strict'

const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class JiraIssue extends Model {

  }

  JiraIssue.init({
    projectId: {
      type: DataTypes.INTEGER
    },
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    leadTime: {
      type: DataTypes.INTEGER
    },
    issueType: {
      type: DataTypes.STRING
    },
    epicKey: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    issueCreatedAt: {
      type: DataTypes.DATE
    },
    issueUpdatedAt: {
      type: DataTypes.DATE
    },
    issueResolvedAt: {
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'JiraIssue',
    underscored: true
  })

  return JiraIssue
}

require('module-alias/register')
const { findOrCreateCollection } = require('../../../commondb')
const fetcher = require('./fetcher')

async function collect ({ db, boardId, forceAll }) {
  if (!boardId) {
    throw new Error('Failed to collect jira data, boardId is required')
  }

  await collectByBoardId(db, boardId, forceAll)
}

async function collectByBoardId (db, boardId, forceAll) {
  console.info('INFO >>> jira collecting board', boardId)
  const boardsCollection = await getCollection(db)
  const response = await fetcher.fetch(`agile/1.0/board/${boardId}`)
  const board = response.data
  await boardsCollection.findOneAndUpdate(
    { id: board.id },
    { $set: board },
    { upsert: true }
  )
  console.info('INFO >>> jira collecting board done!', boardId)
}

async function getCollection (db) {
  return await findOrCreateCollection(db, 'jira_boards')
}

module.exports = { collect, getCollection }

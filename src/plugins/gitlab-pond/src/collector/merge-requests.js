require('module-alias/register')
const { findOrCreateCollection } = require('../../../commondb')
const fetcher = require('./fetcher')

async function collect ({ db, projectId, forceAll }) {
  if (!projectId) {
    throw new Error('Failed to collect gitlab data, projectId is required')
  }

  await collectByProjectId(db, projectId, forceAll)
}

async function collectByProjectId (db, projectId, forceAll) {
  console.info('INFO >>> gitlab collecting merge-requests for project', projectId)
  const mrsCollection = await getCollection(db)
  for await (const mr of fetcher.fetchPaged(`projects/${projectId}/merge_requests`)) {
    mr.projectId = projectId
    await mrsCollection.findOneAndUpdate(
      { id: mr.id },
      { $set: mr },
      { upsert: true }
    )
  }
  console.info('INFO >>> gitlab collecting merge-requests for project done!', projectId)
}

async function getCollection (db) {
  return await findOrCreateCollection(db, 'gitlab_merge_requests')
}

module.exports = { collect, getCollection }

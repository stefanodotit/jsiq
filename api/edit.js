/* eslint-disable handle-callback-err */
/* eslint-disable no-console */
import { IS_PROD } from '../utils'
const fs = require('fs')

export default async function(req, res, next) {
  if (IS_PROD) return
  const questionFile = await require('../data/questions.json')
  const { question, answer, categories, id } = req.body
  const reqQuestionCategoriesIds = categories.map(cat => cat.id)
  const json = { ...questionFile }
  for (let categoryId of Object.keys(json.questions)) {
    categoryId = parseInt(categoryId)
    for (let i = 0; i < json.questions[categoryId].length; i++) {
      const qJson = json.questions[categoryId][i]
      if (qJson.id === id) {
        if (reqQuestionCategoriesIds.includes(categoryId)) {
          json.questions[categoryId][i] = {
            question,
            answer,
            categories,
            id: qJson.id
          }
          reqQuestionCategoriesIds.splice(
            reqQuestionCategoriesIds.indexOf(categoryId),
            1
          )
        } else {
          json.questions[categoryId].splice(i, 1)
        }
        break
      }
    }
  }
  for (const catId of reqQuestionCategoriesIds) {
    json.questions[catId].push({
      question,
      answer,
      categories,
      id
    })
  }
  fs.writeFile(`./data/questions.json`, JSON.stringify(json), err => {
    if (err) {
      return console.err(err)
    }
  })
  delete require.cache[require.resolve('../data/questions.json')]
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify({ success: true }))
  res.end()
}

/* eslint-disable handle-callback-err */
/* eslint-disable no-console */
import { IS_PROD } from '../utils'
const fs = require('fs')

export default async function(req, res, next) {
  if (IS_PROD) return
  const questionFile = await require('../data/questions.json')
  const { question, answer, categories } = req.body
  const json = { ...questionFile }
  json.id++
  categories.forEach(category => {
    if (!json.questions[category.id]) {
      json.questions[category.id] = []
    }
    json.questions[category.id].push({
      question,
      answer,
      categories,
      id: json.id
    })
  })
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

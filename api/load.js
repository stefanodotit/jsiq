/* eslint-disable no-console */
export default async function(req, res, next) {
  const questions = await require('../data/questions.json')
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(questions.questions))
  delete require.cache[require.resolve('../data/questions.json')]
  res.end()
}

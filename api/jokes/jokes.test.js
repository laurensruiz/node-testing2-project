const request = require('supertest')
const db = require('../../data/db-config')
const server= require('../../server')
const Joke = require('./jokes-model')

const joke1 = {joke:'D', punchline:'D'}
const joke2 = {joke:'E', punchline:'E'}

it('sanity check', () => {
  expect(true).toBe(true)
})

beforeAll(async ()=>{
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async ()=>{
  await db('jokes').truncate()
})

afterAll(async()=> {
  await db.destroy()
})

it('correct env var', ()=> {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('Jokes model Function', ()=> {
  describe("create joke", ()=> {
    it('add joke to db', async ()=>{
      let jokes
      await Joke.createJoke(joke1)
      jokes= await db('jokes')
      expect(jokes).toHaveLength(1)

      await Joke.createJoke(joke2)
      jokes= await db('jokes')
      expect(jokes).toHaveLength(2)
    })
    it('inserted joke and punchline', async ()=>{
      const joke = await Joke.createJoke(joke1)
      expect(joke).toMatchObject({jokes_id:1,...joke})
    })
  })
  describe('[DELETE] / - deletes joke', ()=>{
    it('removes joke from db', async()=>{
      const [jokes_id] = await db("jokes").insert(joke1)
      let joke = await db("jokes").where({jokes_id}).first()
      expect(joke).toBeTruthy()

      //our endpoint
      await request(server).delete("/jokes/"+jokes_id)
      joke = await db("jokes").where({jokes_id}).first()
      expect(joke).toBeFalsy()
    })
    it('responds with the deleted joke', async()=>{
      await db("jokes").insert(joke1)
      let joke = await request(server).delete("/jokes/1")
      expect(joke.body).toMatchObject(joke1)
    })
  })
})






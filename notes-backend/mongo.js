const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://anavmehta1:${password}@cluster0.8nogm3r.mongodb.net/noteApp?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const notes = [
//   { content: 'HTML is Easy', important: true },
//   { content: 'CSS is hard', important: true },
//   { content: 'Mongoose makes things easy', important: true },
//   { content: 'Test Note', important: true },

// ]

// Note.insertMany(notes).then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })


Note.find({content : 'HTML is Easy'}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
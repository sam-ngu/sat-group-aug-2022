const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
//modular

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

/**
 * 
 * @returns {Array}
 */
function getNotes(){

  // use fs to read the db.json
  const json = fs.readFileSync(dbPath, 'utf-8');
  // json parse
  try{
    return JSON.parse(json);
  }catch(err){
    return [];
  }
}



router.get('/api/notes', (req, res) => {
  // should return a listing of notes
  // retrieve the notes from db .json
  res.json(getNotes())

});


// update a user?

// RESTFUL  -- no bulk

// users, notes, comments (entities / models)

// GET -- reading / downloading
// POST -- creating

// PUT/Patch -- updating

// DELETE -- delete




// GET -- /api/users    -- list
// GET -- /api/users/:id    -- specific
// CREATE -- /api/users
// PUT -- /api/users/:id
// PUT -- /api/users/3
// DELETE -- /api/users/3







router.post('/api/notes', (req, res) => {

  // create a new note
  const newNote = {
    id: uuid.v4(), //'daada-dasdad-sdd'
    text: req.body.text,
    title: req.body.title,
  }


  // add to db.json
  const existing = getNotes();

  existing.push(newNote);

  fs.writeFileSync(dbPath, JSON.stringify(existing), 'utf-8');

  res.json(newNote);


})
// router.get('/', (req, res) => {
//   const index = path.join(__dirname, '..', 'public', 'index.html');
//   res.sendFile(index);
// })


module.exports = router;


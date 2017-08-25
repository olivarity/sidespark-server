const router = require('express').Router();
const bodyParser = require('body-parser');
const Project = require('../../models/project');

router.use(bodyParser.json());

router.route('/')
// GET all Projects
  .get(function (req, res) {
    Project.find()
    .populate('creator contributors', 'name avatar')
    .exec(function(err, list) {
      if(err) return res.sendStatus(500);
      res.json(list);
    })
  })

// POST new Project
  .post(function (req, res) {
    //Insert some validation here
    if (req.user) {
      const project = new Project(req.body);
      project.creator = req.user._id;
      project.contributors = [req.user._id]
      project.save(function (err, doc) {
        if(err) return res.sendStatus(500);
        res.send(doc.id);
      });
    }
  else { res.sendStatus(403) };
  })

// GET Project by ID
router.get('/:id', function (req, res) {
  Project.findById(req.params.id)
  .populate('creator contributors', 'name avatar')
  .exec(function(err, project) {
    if(err) return res.sendStatus(500);
    res.json(project);
  });
});


module.exports = router;

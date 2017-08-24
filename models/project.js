const db = require('../utils/db');
const Schema = require('mongoose').Schema;
const timestamps = require('mongoose-timestamp');

//Define schema
const ProjectSchema = new Schema({
  creator: { type: String, ref: 'User', required: true },
  contributors: {
    type: [{ type: String, ref: 'User' }],
    validate: [projectContributorArrayLimit, '{PATH} exceeds the array size limit of 8']
  },
  upvoters: [{ type: String, ref: 'User' }],

  title: { type: String, required: true },
  headline: { type: String, maxlength: 50 },
  category: String,
  description: String,
  imageURL: String,
  releaseURL: String
});

//Validators
function projectContributorArrayLimit(val) {
  return val.length <= 8;
}

ProjectSchema.virtual('url').get(function () {
  return '/api/project/' + this._id;
});

ProjectSchema.virtual('upvotes').get(function () {
  return this.upvoters.length;
});

ProjectSchema.plugin(timestamps);

module.exports = db.model('Project', ProjectSchema);

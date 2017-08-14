const db = require('../utils/db');
const Schema = require('mongoose').Schema;
const timestamps = require('mongoose-timestamp');


//Define schema
const ProjectSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  contributors: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    validate: [projectContributorArrayLimit, '{PATH} exceeds the array size limit of 8']
  },
  upvoters: [{ type: Schema.Types.ObjectId, ref: 'User' }],

  title: { type: String, required: true }
  headline: { type: String, maxlength: 50 }
  description: String,
  image: String,
  website: String
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

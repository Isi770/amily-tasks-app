// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['parent', 'child'],
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    min: 1,
    max: 120
  },
  points: {
    type: Number,
    default: 0,
    min: 0
  },
  avatarUrl: {
    type: String,
    default: '/default-avatar.png'
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);

// models/Task.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  points: {
    type: Number,
    required: true,
    min: 1
  },
  frequency: {
    type: String,
    enum: ['יומי', 'שבועי', 'חודשי', 'חד פעמי'],
    default: 'יומי'
  },
  assignedTo: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);

// models/TaskCompletion.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskCompletionSchema = new Schema({
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  completedAt: {
    type: Date,
    default: Date.now
  },
  pointsEarned: {
    type: Number,
    required: true,
    min: 1
  },
  verifiedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('TaskCompletion', TaskCompletionSchema);

// models/Reward.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RewardSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  points: {
    type: Number,
    required: true,
    min: 1
  },
  availableTo: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String,
    default: '/default-reward.png'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reward', RewardSchema);

// models/RewardClaim.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RewardClaimSchema = new Schema({
  reward: {
    type: Schema.Types.ObjectId,
    ref: 'Reward',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  claimedAt: {
    type: Date,
    default: Date.now
  },
  pointsSpent: {
    type: Number,
    required: true,
    min: 1
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

module.exports = mongoose.model('RewardClaim', RewardClaimSchema);
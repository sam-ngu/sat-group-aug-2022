const { Schema, model } = require('mongoose');


const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
  },
  reactionBody:{
    type: Schema.Types.String,
    required: true,
    max_length: 280,
  },
  username: {
    type: Schema.Types.String,
    required: true,
  }
}, {
  timestamps: true,
  _id: true,  // TODO: check if this work
})

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },

    // DO NOT DO THIS, not making sense in real world
    username: {
      type: String,
      required: true,

    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

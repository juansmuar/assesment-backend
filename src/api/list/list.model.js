import { Schema, model } from 'mongoose';

const ListSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  items : [{
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    }
  }],
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  versionKey: false,
});

const List = model('List', ListSchema);

export default List;
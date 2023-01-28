import { Schema, model } from 'mongoose';

const ListSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  favs : {
    type : Array,
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User',
    // required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const List = model('List', ListSchema);

export default List;
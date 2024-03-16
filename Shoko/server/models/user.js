const mongoose=require('mongoose')
const {Schema}=mongoose
const userSchema= new Schema({
    name:String,
    email:{
        type: String,
        unique:true
    },
    password: String,
    cases: [{ type: Schema.Types.ObjectId, ref: 'Case' }]
})
const caseSchema = new Schema({
    title: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    clues: [{ type: Schema.Types.ObjectId, ref: 'Clue' }],
    people: [{ type: Schema.Types.ObjectId, ref: 'Person' }] 
  });
  
  // Define Clue Schema
  const clueSchema = new Schema({
    category: String,
    date_discovered: Date,
    description: String
  });
  
  // Define Person Schema
  const personSchema = new Schema({
    name: String,
    profession: String,
    details: String
  });
const User= mongoose.model('user',userSchema)
const Case = mongoose.model('Case', caseSchema);
const Clue = mongoose.model('Clue', clueSchema);
const Person = mongoose.model('Person', personSchema);


module.exports = { User, Case, Clue, Person };

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var billSchema = new Schema({
    id: { type: String, required: true, unique: true },
    bill_no: { type: Number, required: true, unique: true },
    bill_date: Date,
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
    amount_due: Number,
    amount_paid: Number,
    collected_by: String,
    collected_date: Date,
    stb_no: String
});
// the schema is useless so far
// we need to create a model using it
var Bill = mongoose.model('Bill', billSchema);
// make this available to our users in our Node applications
module.exports = Bill;
//# sourceMappingURL=bill.js.map
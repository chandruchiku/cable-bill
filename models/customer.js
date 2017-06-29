// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var customerSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: String,
    address: String,
    area_code: Number,
    area_description: String,
    stbNo: { type: String, required: true, unique: true },
    plan: String,
    amount_due: Number,
    created_at: Date,
    updated_at: Date
});
// the schema is useless so far
// we need to create a model using it
var Customer = mongoose.model('Customer', customerSchema);
// make this available to our users in our Node applications
module.exports = Customer;
//# sourceMappingURL=customer.js.map
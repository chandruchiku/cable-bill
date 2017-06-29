var User = require('../models/user');
// Display list of all books
exports.user_list = function (req, res, next) {
    User.find({}, 'username name role ')
        .exec(function (err, list_users) {
        if (err) {
            return next(err);
        }
        //Successful, so render
        //send back the list of users
        res.send(list_users);
        //res.render('book_list', { title: 'Book List', book_list:  list_books});
    });
};
// Display specific users detail
exports.user_detail = function (req, res, next) {
    User.find({ 'username': req.params.username })
        .exec(function (err, user) {
        if (err) {
            return next(err);
        }
        //Successful, so render
        //send back the list of users
        res.send(user);
        //res.render('book_list', { title: 'Book List', book_list:  list_books});
    });
};
// Handle book create on POST
exports.user_create_post = function (req, res, next) {

    console.log('crete user requet');
 
    req.checkBody('name', 'Name must not be empty.').notEmpty();
    req.checkBody('username', 'Username must not be empty').notEmpty();
    req.checkBody('password', 'Password must not be empty').notEmpty();
    req.checkBody('role', 'Role must not be empty').notEmpty();
    req.sanitize('name').escape();
    req.sanitize('username').escape();
    req.sanitize('password').escape();
    req.sanitize('role').escape();
    req.sanitize('name').trim();
    req.sanitize('username').trim();
    req.sanitize('password').trim();
    req.sanitize('role').trim();

    var user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        created_at: new Date(),
        updated_at: new Date()
    });
    console.log('USER: ' + JSON.stringify(user));

    var errors = req.validationErrors();
    if (errors) {
        console.log('ERRORS: ' + errors);
        res.status(400).send(errors);
    }
    else {
        // Data from form is valid.
        // We could check if book exists already, but lets just save.
        user.save(function (err) {
            if (err) {
                return next(err);
            }
            //successful - redirect to new book record.
            res.status(200);
        });
    }
};
// Handle book delete on POST
exports.user_delete_post = function (req, res, next) {
    //Assume the post will have id (ie no checking or sanitisation).
    //Book has no bookinstances. Delete object and redirect to the list of books.
    User.findByIdAndRemove(req.body.id, function deleteUser(err) {
        if (err) {
            return next(err);
        }
        //Success - got to books list
        res.status(200);
    });
};
// Handle book update on POST
exports.user_update_post = function (req, res, next) {
    //Sanitize id passed in.
    req.sanitize('id').escape();
    req.sanitize('id').trim();
    req.checkBody('name', 'Name must not be empty.').notEmpty();
    req.checkBody('username', 'Username must not be empty').notEmpty();
    req.checkBody('password', 'Password must not be empty').notEmpty();
    req.checkBody('role', 'Role must not be empty').notEmpty();
    req.sanitize('name').escape();
    req.sanitize('username').escape();
    req.sanitize('password').escape();
    req.sanitize('role').escape();
    req.sanitize('name').trim();
    req.sanitize('username').trim();
    req.sanitize('password').trim();
    req.sanitize('role').trim();
    var user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        created_at: new Date(),
        updated_at: new Date(),
        _id: req.params.id //This is required, or a new ID will be assigned!
    });
    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send(errors);
    }
    else {
        // Data from form is valid. Update the record.
        User.findByIdAndUpdate(req.params.id, user, {}, function (err, user) {
            if (err) {
                return next(err);
            }
            //successful - redirect to book detail page.
            res.status(200);
        });
    }
};
//# sourceMappingURL=userController.js.map
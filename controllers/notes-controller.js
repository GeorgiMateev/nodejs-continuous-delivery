module.exports = function (Note) {
    function get(req, res) {
        Note.findAll().then(function (notes) {
            res.send({
                items: notes
            });
        }, function (error) {
              res.status(500).send(error);
          });
    }

    function post(req, res, next) {
        Note.sync().then(function () {
          // Table created
          return Note.create({
            text: req.body.text
          })
          .then(function (note) {
              res.send(note);
          }, function (error) {
              res.status(500).send(error);
          });
        });
    }

    function del(req, res, next) {
        Note.findById(req.params.id)
            .then(function (note) {
                return note.destroy();
            })
            .then(function () {
                res.send('Ok');
            }, function (error) {
              res.status(500).send(error);
          });
    }

    return {
        get: get,
        post: post,
        delete: del
    };
}
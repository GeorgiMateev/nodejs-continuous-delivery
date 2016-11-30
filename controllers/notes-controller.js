exports = function () {
    function get(req, res) {
        
    }

    function post(req, res) {
        // body...
    }

    function delete(req, res) {
        var noteId = req.params.id;
    }

    return {
        get: get,
        post: post,
        delete: delete
    };
}
/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getTodos: function(req, res) {
        TodoService.getTodos(function(todos) {
            res.json(todos);
        });
    },
    addTodo: function(req, res) {
        var todoVal = (req.body.value) ? req.body.value : undefined
        TodoService.addTodo(todoVal, function(success) {
            res.json(success);
        });
    },
    removeTodo: function(req, res) {
       var todoVal = (req.body.value) ? req.body.value : undefined
        TodoService.removeTodo(todoVal, function(success) {
            res.json(success);
        });
    }
};


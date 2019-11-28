const User = require('./user.shema');

module.exports = {

    Query:{
        users: ()=> User.find(),
        user: (_,{ id })=> User.findById(id)
    },

    Mutation:{
        createUser: (_,{ nome, email })=>User.create({nome, email}),
        deleteUser: (_,{ id })=>User.findByIdAndDelete(id)
    }

};
const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        uniqre: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema);
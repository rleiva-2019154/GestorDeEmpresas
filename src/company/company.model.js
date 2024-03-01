import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    impactLevel: {
        type: String,
        required: true
    },
    yearOfExperience: {
        type: Number,
        required: true
    },
    businessCategory: {
        type: String,
        required: true
    },
    CEO: {
        type: String,
        required: true
    }
})

export default mongoose.model('company', companySchema)
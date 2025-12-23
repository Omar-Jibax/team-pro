const createOne = (Model) => async(data) => {
    const doc = await Model.create(data)
    return doc
}

const getAll = (Model, filter = {}) => async() => {
    const docs = await Model.find(filter)
    if(!docs) throw new Error("Documents noft found")
    return docs
}


const getOne = (Model , id) => async() => {
    const doc = await Model.findById(id)
    if(!doc) throw new Error("Document noft found")
    return doc
}

const updateOne = (Model, id, data ) => async() => {
    const doc = await Model.findByIdAndUpdate(id, data, {new: true, runValidator: true})
    if(!doc) throw new Error("Document noft found")
    return doc
}

const deleteOne = (Model, id ) => async() => {
    const doc = await Model.findByIdAndDelete(id)
    if(!doc) throw new Error("Document noft found")
    return doc
}


module.exports = {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne
}
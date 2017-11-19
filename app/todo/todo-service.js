const db = require('../../utils/db');


class TodoService {
    async getById(id) {
        return await db.todo.findOne({ _id: db.objectId(id) });
    }

    async getAll() {
        return await db.todo.find().toArray();
    }

    async save(data) {
        let date = new Date();
        data.completed = false;
        data.createdAt = date;
        data.updatedAt = date;
        return await db.todo.insert(data);
    }

    async update(id, data) {
        return await db.todo.update({ _id: db.objectId(id) }, { data });
    }

    async delete(id) {
        console.log('id', id);
        return await db.todo.remove({ _id: db.objectId(id) });
    }
}

module.exports = new TodoService();
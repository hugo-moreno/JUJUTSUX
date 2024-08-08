const dataBase = require("./db.json");
const mapDataBase = new Map(Object.entries(dataBase));
module.exports = Object.freeze({
  findById: (id) => mapDataBase.get(id),
  insert: async (car) => {
    return null
  
  },
  findAll: () => Array.from(mapDataBase.values()),
  removeById: (id) => mapDataBase.delete(id),
  update: (updatedCart) => {
    if (!mapDataBase.has(updatedCart.id)) throw new Error('user not found');
    mapDataBase.set(updatedCart.id, { ...mapDataBase.get(updatedCart.id), ...updatedCart });
  },
});
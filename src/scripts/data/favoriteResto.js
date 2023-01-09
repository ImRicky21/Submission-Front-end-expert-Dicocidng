import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const promiseDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const restoFavoriteIdb = {
  async getResto(id) {
    return (await promiseDB).get(OBJECT_STORE_NAME, id);
  },
  async getAllResto() {
    return (await promiseDB).getAll(OBJECT_STORE_NAME);
  },
  async putResto(restaurant) {
    return (await promiseDB).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteResto(id) {
    return (await promiseDB).delete(OBJECT_STORE_NAME, id);
  },
};
export default restoFavoriteIdb;

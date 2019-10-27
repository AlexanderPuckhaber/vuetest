import axios from 'axios';

const url = 'http://128.61.74.152:3000/api/merchants/inventories/';

class SheetService {
    static getSearch(search) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}?s=${search}`, { timeout: 60000 });

                resolve(res.data);
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default SheetService;
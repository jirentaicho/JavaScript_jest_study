import axios from 'axios'
class HotAnimations{
    static getList(){
        return axios.get('/hogehoge').then( res => res.data);
    }
}
export default HotAnimations;
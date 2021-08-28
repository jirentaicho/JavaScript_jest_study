module.exports = {

    /**
     * 
     * yyyy/mm/dd形式で日付を返却する。（現在日付）
     * 
     * @returns 基準日
     */
    getBusinessFormatDate(baseDate){
        const outDay = ('00' + baseDate.getDate()).slice(-2);
        const outMonth = ('00' + (baseDate.getMonth() +1)).slice(-2);
        const year = baseDate.getFullYear();

        return year + "/" + outMonth + "/" + outDay;
    },

    /**
     * 
     * ベース日付からリード日付を計算した日付を取得する
     * 
     * @param {*} baseDay fotmat yyyy/mm/dd
     * @param {*} readDays number
     * 
     * @returns リード日付を計算した日付
     */
    getDateFromReadDays(baseDay,readDays){
        return this.getBusinessFormatDate(new Date(baseDay.setDate(baseDay.getDate() + readDays)));
    },


    /**
     * 
     * fromからtoまでの日数を取得する
     * 
     * @param {*} from 開始日付
     * @param {*} to 終了日付
     * @returns 差日数
     */
    getDaysFromTo(from,to){
        const resultDays = to - from;
        return resultDays / 1000 / 60 / 60 / 24;
    },

    /**
     * 
     * 日付が範囲ないであること
     * 
     * @param {*} from 範囲開始日
     * @param {*} to 範囲終了日
     * @param {*} day 検査日
     * @returns 検査日付が範囲内の場合true　それ以外の場合false
     */
    isValidDate(from, to, day){
        return (from < day && to > day);
    },

}
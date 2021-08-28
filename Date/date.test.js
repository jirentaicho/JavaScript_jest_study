const myDate = require('./date.js');

/**
 * 
 * テスト
 * 
 * 1
 * yyyy/mm/dd 形式で日付取得メソッドを作成する。
 * 例：getBusinessFormatDate() →　2021/08/28
 * 
 * 2
 * リード日数を与えた日付が正しく取得できる
 * 例：2021/08/20　にリード日数3を与えた場合　2021/08/23が取得できること
 * 
 * 3
 * 日付と日付の間の日数（到着日数）を取得できる
 * 例：08/20発送 08/25到着の場合 5が取得できること
 * 
 * 4
 * ある日付が、ある日付と日付の範囲内にあるバリデーション処理ができること
 * 例：20210801~20211001までの間は受注不可能とすること
 * 
 */


test('営業日日付をyyyy/mm/dd形式で取得できる', () => {
    // 正規表現を利用して
    const result = myDate.getBusinessFormatDate(new Date());
    const regex = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/;

    expect(regex.test(result)).toBe(true);
});


test('日付にリード日数を与えてリード日数後の日付が取得できる', () => {
    const result = myDate.getDateFromReadDays(new Date('2021/08/10'),10);
    expect(result).toBe('2021/08/20');
})


test('発送日と到着日までの日数が取得できること', () => {
    const result = myDate.getDaysFromTo(new Date('2021/08/10'), new Date('2021/08/20'));
    expect(result).toBe(10);
})


test('日付が日付と日付の範囲内の時にtrueになること', () => {
    const result = myDate.isValidDate(new Date('2021/08/10'), new Date('2021/08/20'), new Date('2021/08/15'));
    expect(result).toBe(true);
})


test('日付が日付と日付の範囲外の時にfalseになること', () => {
    const result = myDate.isValidDate(new Date('2021/08/10'), new Date('2021/08/20'), new Date('2021/08/25'));
    expect(result).toBe(false);  
})

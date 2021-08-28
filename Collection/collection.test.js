
const myCollection = require('./collection.js');
const myProduct = require('./Product.js');

/**
 * 
 * テスト
 * 
 * 1
 * オブジェクトの金額をreduceで合計する
 * 
 * 2
 * オブジェクトマッピング
 * (感覚のみ)
 * 
 */


test('オブジェクトリストから商品価格の金額合計が計算できる', () => {
    const productA = new myProduct("アクリルフィギュア", 800);
    const productB = new myProduct("ピンバッジ", 500);
    const productC = new myProduct("メタリックシール", 700);

    const products = [productA,productB,productC]
    const amt = myCollection.getPriceAmount(products)

    expect(amt).toBe(2000)

})

test('オブジェクトマッピングできている', () => {
    const productA = new myProduct("アクリルフィギュア", 800);
    const popupstorProduct = myCollection.toPopupstoreProduct(productA)

    expect(popupstorProduct.popupstoreName).toBe(productA.productName)
    expect(popupstorProduct.popupstorePrice).toBe(productA.productPrice)

})



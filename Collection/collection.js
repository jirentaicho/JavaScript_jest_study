module.exports = {
    getPriceAmount(products){
        return products.reduce( (acc,product) => {
            return acc + product.productPrice;
        },0);
    },
    toPopupstoreProduct(product){
        return {
            popupstoreName: product.productName,
            popupstorePrice: product.productPrice,
        }
    }
}
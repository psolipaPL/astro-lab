const options = {
    method: "GET",
    headers: {
        Authorization: "0ae0b1c2-acda-48e5-83c4-21b3d26bb17e",
    }
};

const data = await fetch('https://product-league-dev.outsystems.app/ProductCore/rest/Product/GetProducts?Limit=20&Offset=0', options).then((response) =>
    response.json()
);

const productsList = data.map((product) => {
    return (
        <>
            <a key={product.SKU}>
                <div className="list-item cart-item-wrapper plp-item-wrapper">
                    <div className="list-item-content">
                        <div className="ph list-item-content-left text-primary-color">
                            <div className="plp-item-image-container">
                                <div className="plp-item-image">
                                    <div className="image-loader-wrapper">
                                        <img src={product.ImageURL} alt="" />
                                        {/* <div className="no-image-wrapper"
                                            id="b3-l1-3_1-b2-NoImagePlaceholder">
                                            <div data-block="CustomPatterns.IconPlus" className="OSBlockWidget"
                                                id="b3-l1-3_1-ImgPlaceholderIcon">
                                                <div data-container="" className="display-inline-flex"><i data-advancedhtml=""
                                                    className="icon-plus icon-plus-home icon-4x text-neutral-2"></i></div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item-content-center">
                            <div className="list-item-content-title">
                                <div className="plp-item-complementary-top"></div>
                                <div className="plp-item-name">
                                    <h3>
                                        <span data-expression>{product.Name}</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="list-item-content-text">
                                <div className="plp-item-complementary">
                                    <div className="margin-bottom-xs">
                                        <span data-expression>Per {product.PackageNetContentValue} {product.PackageTypeValue}
                                            (per
                                            {product.BaseUnitPrice_Text} €{product.BaseUnitPrice_Price})</span>
                                    </div>
                                </div>
                                <div className="plp-item-price">
                                    <div className="font-bold product-header-price-integer">
                                        {/* <span *ngIf="product.Price">{{ product.Price - product.Price % 1 }}.</span>
                                    <span *ngIf="!product.Price">0.</span> */}
                                        <span>{product.Price - product.Price % 1}.</span>
                                    </div>
                                    <div className="font-black product-header-price-decimals">
                                        {/* <span *ngIf="product.Price" data-expression>{{(product.Price % 1 *
                                    100).toFixed(0)}}{{((product.Price % 1 *
                                        100).toFixed(0)).length === 1 ? '0' : ''}}</span>
                            <span *ngIf="!product.Price">00</span> */}
                                        <span data-expression>{(product.Price % 1 *
                                            100).toFixed(0)}{((product.Price % 1 *
                                                100).toFixed(0)).length === 1 ? '0' : ''}</span>
                            </div >
                        </div >
                    </div >
                </div >
                <div className="ph list-item-content-right">
                    <div data-container="" className="cart-item-wrapper-action__link" id="b3-l1-3_1-b1-AddQuantityDiv">
                        <div className="plp-item-quantity" id="b3-l1-3_1-b1-Quantity">
                            <div data-container="" className="btn btn-action add">
                                <div data-block="CustomPatterns.IconPlus" className="OSBlockWidget" id="b3-l1-3_1-$b4">
                                    <div data-container="" className="display-inline-flex"><i data-advancedhtml=""
                                        className="icon-plus icon-plus-add-to-cart"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
              </a >
        </>
    );
});

export default function Products() {
    return (
        <>
            <div className="product-list-page-layout">
                <div className="background-neutral-0 padding-top-base plp-list-section">
                    <div className="ThemeGrid_Container content-section-full no-padding-top">
                        <div className="plp-content-wrapper">
                            <div className="plp-results-wrapper">
                                <div className="plp-results-header">
                                    <h1>
                                        <span>Search</span>
                                    </h1>
                                    <div className="top-information vertical-align">
                                        <div className="display-flex">
                                            <span className="font-semi-bold margin-right-xs">{data.length}</span>
                                            <span className="font-semi-bold margin-right-xs">0</span>
                                            <span>producten</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="list list-group plp-results-list">
                                        {productsList}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
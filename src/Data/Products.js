class Products {
    constructor() {
        this.list = [
            {
                id: "b",
                name: "Battery",
                details: "This is a battery and therefore should not be eaten without charge.",
                price: 2,
            },
            {
                id: "c",
                name: "Car",
                details: "This is not only a car but also a hotel.",
                price: 19023,
            },
        ];
    }

    getProductByID(id) {
        return (this.list.filter(
            element.id == id;
        ));
    }
};

export default Products;
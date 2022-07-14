export class Products {
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

        this.getProductByID = this.getProductByID.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);
    }

    getAllProducts = () => {
        return this.list;
    }

    getProductByID = (id) => {
        let product = this.list.filter((element) => element.id == id);
        return product[0];
    }
};
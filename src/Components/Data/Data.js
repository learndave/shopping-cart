import uniqid from "uniqid";

const Data = [
    {
        id: uniqid(),
        title: "Product 1",
        desc: "This is a nice product",
        price: 1.00,
    },
    {
        id: uniqid(),
        title: "Product 2",
        desc: "This is a not nice product",
        price: 3.65,
    },
    {
        id: uniqid(),
        title: "Product 3",
        desc: "This is a not a product but a service",
        price: 100.44,
    },
];

export default Data;
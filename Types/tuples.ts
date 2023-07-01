const tup: [number, string] = [37, 'age'];
// tup[0] = '400';
tup[0] = 400;

type HSLcolor = [number, number, number];

// const pageColor: HSLcolor = [222, 111, 1, 23];
const pageColor: HSLcolor = [222, 111, 1];

type HTTPResponses = [number, string];

const responses: HTTPResponses[] = [
    [200, 'OK'],
    [404, 'Not found'],
    [503, 'Server error'],
];

enum OrderStatus {
    PENDING = 22,
    SHIPPED, // 23
    DELIVERED = 500,
    RETURNED, // 501
}

const myStatus1 = OrderStatus.PENDING;
const myStatus2 = OrderStatus.SHIPPED;
const myStatus3 = OrderStatus.DELIVERED;
const myStatus4 = OrderStatus.RETURNED;

function isDelivered(status: OrderStatus) {
    console.log('status: ', status);
}

isDelivered(myStatus1);
isDelivered(myStatus2);
isDelivered(myStatus3);
isDelivered(myStatus4);

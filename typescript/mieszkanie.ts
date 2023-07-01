interface Mieszkanie {
    numberOfRooms: number;
    price: number;
    address: string;
    status: string;
}

const drukMieszkanie = (mieszkanie: Mieszkanie): void => {
    console.log(
        `mieszkanie za ${mieszkanie.price} ma ${mieszkanie.numberOfRooms} and is situated at ${mieszkanie.address} i jest ${mieszkanie.status}`
    );
};

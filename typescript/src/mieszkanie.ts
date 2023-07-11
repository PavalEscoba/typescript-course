interface Mieszkanie {
    numberOfRooms: number;
    price: number;
    address: string;
    status: string;
}

const drukMieszkanie = (mieszkanie: Mieszkanie): void => {
    console.log(
        `mieszkanie za ${mieszkanie.price} ma ${mieszkanie.numberOfRooms} pokoje i usytujowane na osiedlu ${mieszkanie.address} i jest ${mieszkanie.status}`
    );
};

const mieszkanie1: Mieszkanie = {
    address: 'Antoniuk',
    numberOfRooms: 3,
    price: 2100,
    status: 'swietnie',
};

drukMieszkanie(mieszkanie1);

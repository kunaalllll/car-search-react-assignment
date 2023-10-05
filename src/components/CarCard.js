import React from "react";

const CarCard = ({ car }) => {
  return (
    <div style={{ border: "3px solid black", padding: "10px", margin: "20px" }}>
      <h2>{car.name}</h2>
      <p>Manufacturing Year: {car.manufacturingYear}</p>
      <p>Seat Count: {car.seatCount}</p>
      <p>Milage: {car.mileage}</p>
      <p>Type: {car.type}</p>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Price: {car.rent}</p>
      <button>Rent</button>
      <button>Wishlist</button>
    </div>
  );
};

export default CarCard;

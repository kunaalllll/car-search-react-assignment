import React from "react";
import { useSelector } from "react-redux";
import CarCard from "./CarCard";

const CarList = () => {
  const cars = useSelector((state) => state.cars); // Assuming 'cars' is a property in your state

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;

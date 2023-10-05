import React, { useState, useEffect } from "react";
import CarCard from "./components/CarCard";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
const cars = [
  {
    name: "Toyota Corolla",
    manufacturingYear: 2020,
    seatCount: 5,
    mileage: 30.5,
    type: "Sedan",
    fuelType: "Gasoline",
    rent: 50,
  },
  {
    name: "Honda Civic",
    manufacturingYear: 2019,
    seatCount: 5,
    mileage: 31.2,
    type: "Sedan",
    fuelType: "Gasoline",
    rent: 48,
  },
  {
    name: "Ford Mustang",
    manufacturingYear: 2021,
    seatCount: 4,
    mileage: 25.8,
    type: "Sports Car",
    fuelType: "Gasoline",
    rent: 70,
  },
  {
    name: "Chevrolet Malibu",
    manufacturingYear: 2020,
    seatCount: 5,
    mileage: 29.0,
    type: "Sedan",
    fuelType: "Gasoline",
    rent: 52,
  },
  {
    name: "Nissan Altima",
    manufacturingYear: 2020,
    seatCount: 5,
    mileage: 28.5,
    type: "Sedan",
    fuelType: "Gasoline",
    rent: 51,
  },
  {
    name: "BMW 3 Series",
    manufacturingYear: 2022,
    seatCount: 5,
    mileage: 27.3,
    type: "Luxury Sedan",
    fuelType: "Gasoline",
    rent: 75,
  },
  {
    name: "Audi A4",
    manufacturingYear: 2021,
    seatCount: 5,
    mileage: 28.9,
    type: "Luxury Sedan",
    fuelType: "Gasoline",
    rent: 72,
  },
  {
    name: "Toyota Camry",
    manufacturingYear: 2021,
    seatCount: 5,
    mileage: 30.1,
    type: "Sedan",
    fuelType: "Gasoline",
    rent: 53,
  },
  {
    name: "Jeep Wrangler",
    manufacturingYear: 2020,
    seatCount: 4,
    mileage: 22.3,
    type: "SUV",
    fuelType: "Gasoline",
    rent: 65,
  },
  {
    name: "Ford Explorer",
    manufacturingYear: 2021,
    seatCount: 7,
    mileage: 26.4,
    type: "SUV",
    fuelType: "Gasoline",
    rent: 60,
  },
  {
    name: "Volkswagen Golf",
    manufacturingYear: 2020,
    seatCount: 5,
    mileage: 29.8,
    type: "Hatchback",
    fuelType: "Gasoline",
    rent: 45,
  },
  {
    name: "Hyundai Sonata",
    manufacturingYear: 2020,
    seatCount: 5,
    mileage: 30.2,
    type: "Sedan",
    fuelType: "Gasoline",
    rent: 49,
  },
  {
    name: "Kia Sorento",
    manufacturingYear: 2021,
    seatCount: 7,
    mileage: 26.9,
    type: "SUV",
    fuelType: "Gasoline",
    rent: 57,
  },
  {
    name: "Mercedes-Benz C-Class",
    manufacturingYear: 2022,
    seatCount: 5,
    mileage: 27.6,
    type: "Luxury Sedan",
    fuelType: "Gasoline",
    rent: 78,
  },
  {
    name: "Lexus RX",
    manufacturingYear: 2021,
    seatCount: 5,
    mileage: 26.7,
    type: "SUV",
    fuelType: "Gasoline",
    rent: 64,
  },
  {
    name: "Subaru Outback",
    manufacturingYear: 2020,
    seatCount: 5,
    mileage: 28.3,
    type: "Crossover",
    fuelType: "Gasoline",
    rent: 55,
  },
  {
    name: "Mazda CX-5",
    manufacturingYear: 2021,
    seatCount: 5,
    mileage: 27.1,
    type: "Crossover",
    fuelType: "Gasoline",
    rent: 59,
  },
  {
    name: "Tesla Model 3",
    manufacturingYear: 2022,
    seatCount: 5,
    mileage: 0.0,
    type: "Electric",
    fuelType: "Electric",
    rent: 90,
  },
  {
    name: "Porsche 911",
    manufacturingYear: 2021,
    seatCount: 2,
    mileage: 24.6,
    type: "Sports Car",
    fuelType: "Gasoline",
    rent: 95,
  },
  {
    name: "Volvo XC90",
    manufacturingYear: 2022,
    seatCount: 7,
    mileage: 25.4,
    type: "SUV",
    fuelType: "Gasoline",
    rent: 63,
  },
];

const App = () => {
  const [carData, setCarData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCarData(cars);
    setFilteredResults(cars);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, "", `/page/${page}`);
  };

  const currentResults = filteredResults.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  return (
    <div>
      <Search carData={carData} setFilteredResults={setFilteredResults} />
      {currentResults.map((car) => (
        <CarCard key={car.name} car={car} />
      ))}
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;

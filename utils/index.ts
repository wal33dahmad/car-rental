import { data } from "@/data";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5aa453a667msh68ded69418e7b18p195bb1jsn6e9c4981d6d5",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // const response = await fetch(
  //   `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
  //   {
  //     headers,
  //   }
  // );

  // const result = await response.json();

  const result = data;

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars

  const mileageFactor = 0.1; // Additional rate per mile driven

  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rent per day
  const RentPerDay = basePricePerDay + mileageRate + ageRate;

  return RentPerDay.toFixed(0);
};

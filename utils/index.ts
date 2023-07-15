import { data } from "@/data";
import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, model, year, fuel, limit } = filters;

  const headers = {
    "X-RapidAPI-Key": "5aa453a667msh68ded69418e7b18p195bb1jsn6e9c4981d6d5",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    {
      headers,
    }
  );
  const result = await response.json();

  // workaround to use without api. only works for toyota corolla & porsche 911
  // const filteredData = data.filter((car) => {
  //   const match = [];

  //   if (manufacturer) {
  //     match.push(car.make.toLowerCase().includes(manufacturer.toLowerCase()));
  //   }
  //   if (model) {
  //     match.push(car.model.toLowerCase().includes(model.toLowerCase()));
  //   }
  //   if (year) {
  //     match.push(car.year === year);
  //   }
  //   if (fuel) {
  //     match.push(car.fuel_type.toLowerCase().includes(fuel.toLowerCase()));
  //   }

  //   return match.some(Boolean);
  // });
  // const result = filteredData.slice(0, limit);

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

export const updateSearchParam = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

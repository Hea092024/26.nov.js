const carManufactureUrl =
  "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";

// const httpStatus = "https://httpstat.us/404";

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
const test = await fetchData(carManufactureUrl);
console.log(fetchData(carManufactureUrl));
console.log(test);

// function useThen(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => console.log("error", error));
// }
// console.log(await useThen(httpStatus));

// const response = await fetch(ghibliUrl);
// const data = await response.json();
// // const useAwait = async (url) => {
// //   const response = await fetch(url);
// //   const data = await response.json();
// console.log(data);

//   return data;
// // };
// const test = useAwait(ghibliUrl);
// console.log(useAwait(test));

// const newApiUrl = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// const newApiData = await fetchData(newApiUrl);
// console.log(newApiData);

// function useThen(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => console.log("Error with .then():", error));
// }

// useThen(newApiUrl).then((data) => {
//   console.log("Data from new API using .then():", data);
// });

// const response = await fetch(newApiUrl);
// const data = await response.json();
// console.log("Data from new API using await:", data);

export const getProduct = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return data;
};

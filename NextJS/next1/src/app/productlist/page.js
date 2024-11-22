async function productList() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data.products;
}

export default async function Page() {
  let products = await productList();
  //   console.log(products);

  return (
    <div className="p-10">
      <h1 className="py-6 text-center text-3xl font-extrabold text-blue-800">
        Product List
      </h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {products.map((i) => (
          <div className="bg-yellow-200 p-4">
            <img
              src={i.images}
              className="h-[200px] w-full object-cover"
              alt=""
            />
            <h1 key={i.id} className="text-center font-bold mt-2">
              {" "}
              {i.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

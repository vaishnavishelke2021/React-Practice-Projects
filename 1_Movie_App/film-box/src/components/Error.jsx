const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-xl font-semibold text-red-500">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <p className="text-xl mt-2">
        Oops! looks like the page is not available.
      </p>
      <a
        href="/"
        className="bg-orange-500 mt-12 bg-transparent border-[2px] border-secondary text-secondary text-[15px] px-4 py-1 font-normal rounded-md hover:bg-orange-600 hover:bg-secondary hover:text-primary transition-all duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;

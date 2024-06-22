import useGif from "../hooks/useGif";

function RandomGif() {
  const { gifUrl, loading, fetchData } = useGif();

  return (
    <div className="w-full md:w-[35%] bg-[#c0bebe14] shadow-md p-4 flex flex-col  items-center rounded-md">
      <h1 className="text-[#f6f6f6] text-2xl font-semibold ">Random GIF</h1>
      <div className="w-full h-[17rem] bg-[#a5ffc20f] rounded-sm mt-3 flex justify-center items-center">
        {!loading ? (
          <img className="h-full " src={gifUrl} alt="Random GIF" />
        ) : (
          <p className="text-white spinner"></p>
        )}
      </div>
      <button
        onClick={() => {
          fetchData();
        }}
        className="bg-[#436724] mt-4 w-full py-1 text-white text-[1.2rem] font-semibold"
      >
        Generate New GIF
      </button>
    </div>
  );
}

export default RandomGif;

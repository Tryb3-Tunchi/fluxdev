const Main = () => {
  return (
    <div className="flex relative mt-20  pt-10 mx-auto w-10/12">
      <div className="img flex-1">
        <img src="photo1.png" alt="" />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-4xl ">
          We Provide <br />
          Digital Solutions.
        </h2>
        <p className="my-6">
          lets create something Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem possimus illo, sequi tempore iure vitae!
        </p>
        <button className="px-2  bg-blue-950 text-lite rounded-md py-1">
          {" "}
          get In touch
        </button>
      </div>
    </div>
  );
};

export default Main;

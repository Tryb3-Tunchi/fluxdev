const Features = () => {
  return (
    <div>
      <h2 className="text-center font-semibold text-4xl my-6 mt-10">
        Our Features
      </h2>
      <div className="flex darkmode w-10/12 mx-auto">
        <div
          className="m-3 px-4 p-3 rounded-md  shadow-lg bg-bground
          bg text-center"
        >
          <p className="font-semibold">Elevate Your Online Presence</p>
          <img className="my-3 m-auto w-2/4" src="./photo3.png" alt="door" />
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis qui sunt quibusdam esse neque sint repellendus autem.
            Libero, autem repudiandae!
          </p>
        </div>
        <div
          className="m-3 px-4 p-3 rounded-md shadow-lg bg-bground
          bg text-center"
        >
          <p className="font-semibold">Elevate Your Online Presence</p>
          <img className="my-3 m-auto w-2/4" src="./photo3.png" alt="door" />
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis qui sunt quibusdam esse neque sint repellendus autem.
            Libero, autem repudiandae!
          </p>
        </div>
        <div className=" p-3 rounded-md m-3 px-4 shadow-lg bg-bground text-center">
          <p className="font-semibold">Elevate Your Online Presence</p>
          <img className="my-3 m-auto w-2/4" src="./photo3.png" alt="door" />
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis qui sunt quibusdam esse neque sint repellendus autem.
            Libero, autem repudiandae!
          </p>
        </div>
      </div>
      <div
        className="flex justify-between items-center
      "
      >
        <div className="flex-1  text-center rounded-md w-4/6 m-auto my-6  px-2">
          <p className="text-2xl font-mono font-semibold pb-6">
            start planning
          </p>
          <img src="./photo2.png" alt="book" />
          {/* <img src="" alt="paper" /> */}
        </div>
        <div className="flex flex-1 items-center">
          <div className="bg-dark text-lite rounded-xl w-4/6 m-auto my-6 py-6 p-2">
            <h2 className="text-center font-semibold text-yellow-400 text-xl">
              we work with you
            </h2>
            <ul className="list-disc list-inside  pl-4 py-2">
              <li>budget</li>
              <li>budget</li>
              <li>budget</li>
              <li>budget</li>
            </ul>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

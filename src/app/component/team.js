const Team = () => {
  return (
    <div>
      <h2 className="text-center text-4xl py-8 font-bold">Our Team</h2>
      <p className="text-center">
        Our web development team is the cornerstone of our success...
      </p>
      <div className="flex justify-center py-6">
        <img
          className="w-1/6 h-full pl-4 transition duration-300 hover:scale-105"
          src="./Frame182.png"
          alt="photo"
        />
        <img
          className="w-1/6 h-full pl-4 transition duration-300 hover:scale-105"
          src="./Frame183.png"
          alt="photo"
        />
        <img
          className="w-1/6 h-full pl-4 transition duration-300 hover:scale-105"
          src="./Frame184.png"
          alt="photo"
        />
        <img
          className="w-1/6 h-full pl-4 transition duration-300 hover:scale-105"
          src="./Frame185.png"
          alt="photo"
        />
        <img
          className="w-1/6 h-full pl-4 transition duration-300 hover:scale-105 mr-4 "
          src="./Frame188.png"
          alt="photo"
        />
      </div>
      <div className="flex justify-center items-center py-6 hover:animate-pulse">
        <div className="w-3 h-3 bg-black rounded-full"> </div>
        <div className="w-3 h-3 bg-black rounded-full mx-2"> </div>
        <div className="w-3 h-3 bg-black rounded-full"> </div>
      </div>
    </div>
  );
};

export default Team;

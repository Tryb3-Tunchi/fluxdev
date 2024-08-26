const Faq = () => {
  return (
    <div>
      <h2 className="text-center text-4xl py-8 font-bold">
        Frequently Asked Questions
      </h2>
      <div className="md:w-2/4 w-3/4 m-auto pb-8">
        <div className="bg-bground hover:shadow cursor-pointer p-3 text-lg mb-8 text-left pl-8">
          What Kind of website do you guys develop? 🔽
        </div>
        <div className="bg-bground hover:shadow cursor-pointer p-3 text-lg mb-8 text-left pl-8">
          How much do you charge 🔽
        </div>
        <div className="bg-bground hover:shadow cursor-pointer p-3 text-lg mb-8 text-left pl-8">
          Do you also design mobile apps? 🔽
        </div>
        <div className="bg-bground hover:shadow cursor-pointer p-3 text-lg mb-8 text-left pl-8">
          How can i contact you? 🔽
        </div>
      </div>
      <div className="w-3/4 m-auto text-center">
        <h2>
          Have you <span className="text-2xl font-semibold">Seen</span> our{" "}
          <span className="text-2xl font-semibold">Products?</span> what are you
          waiting for{" "}
          <button className="p-2 text-lg font-semibold rounded-lg text-lite bg-blue-400">
            Get in touch
          </button>{" "}
          with us now.
        </h2>
      </div>
    </div>
  );
};

export default Faq;

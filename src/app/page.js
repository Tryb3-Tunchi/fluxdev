import Link from "next/link";
import Header from "./component/header";
import Main from "./component/main";
import Features from "./component/features";
import Team from "./component/team";
import Faq from "./component/faq";

const Home = () => {
  return (
    <div className=" darkmode  border-blue-300 ">
      <Header />
      <Main />
      <Features />
      <Team />
      <Faq />
    </div>
  );
};

export default Home;

import Link from "next/link";
import Header from "./component/header";
import Main from "./component/main";
import Features from "./component/features";
import Team from "./component/team";
import Faq from "./component/faq";
import Footer from "./component/footer";

const Home = () => {
  return (
    <div className=" darkmode  border-blue-300 ">
      <Header />
      <Main />
      <Features />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

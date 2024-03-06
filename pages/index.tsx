import Categories from "@/components/Categories";
import JobListings from "@/components/JobListings";
import About from "@/components/about";
import Hero from "@/components/hero";
import Search from "@/components/search";
import Testimonies from "@/components/testimonies";



const Home = () => {
  return (
    <>
        <Hero isHomage={true}/>
        <Search/>
        <Categories/>
        <About/>
        <JobListings/>
        <Testimonies/>
    </>
  );
};

export default Home;

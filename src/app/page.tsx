import Headerr from "./component/header"
import Footer from "./component/footer"

export default function Home() {
  return (
    <>
      <Headerr/>

      <section className="text-center h-[550px] px-[90px]">
        <div>
          <h1 className="text-darkcyan text-4xl pt-[100px]">Welcome to My Website</h1>
          <p className="text-gray-600 text-xl">scroll down</p>
        </div>
      </section>

      <section className="mt-[-200px] p-12 text-center flex">
        <div className="ml-[170px]">
          <h2 className="text-3xl mb-5">About Us</h2>
          <button className="bg-darkcyan text-white py-2 px-5 rounded">
            <a href="/about">about us</a>
          </button>
        </div>
        <div className="ml-[170px]">
          <h2 className="text-3xl mb-5">Our Services</h2>
          <button className="bg-darkcyan text-white py-2 px-5 rounded">
            <a href="/services">View Services</a>
          </button>
        </div>
        <div className="ml-[170px]">
          <h2 className="text-3xl mb-5">Get in Touch</h2>
          <button className="bg-darkcyan text-white py-2 px-5 rounded">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </section>

      <Footer/>
    </>
  );
}
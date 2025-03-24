import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl lg:text-6xl sm:text-5xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r  from-orange-500 to-red-400 text-xl mb-4 ml-2 bg-clip-text text-transparent">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 items-center flex">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="items-center justify-center flex mt-20 text-center h-12 w-full p-5 text-xl tracking-tight border hover:bg-orange-900 border-orange-900 rounded-lg
                transition duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

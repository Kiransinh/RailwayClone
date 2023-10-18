import train from "@/images/homeImages/train.svg";
import logo from "@/images/only logo.png";

const Boarding = () => {
  return (
    <>
      <div className="text-center w-full max-w-container mx-auto ">
        <div className=" flex items-center mx-auto justify-center text-4xl rounded-full border-4 border-blue-500 bg-[#0F1B33] text-blue-500 mb-16 h-[72px] w-[72px]">
          1
        </div>
        <div className=" text-2xl font-semibold text-blue-500 mb-3">
          {" "}
          Now Boarding, Local.
        </div>
        <div className=" text-4xl font-bold text-white ">Start and Thinker</div>
        <div className="border-t border-blue-500 w-40 mx-auto my-8"></div>
        <div className="text-lg max-w-4xl mx-auto text-white">
          Begin with your repository, or start with a template. Our tooling
          extends your app with plugins and variable management so environments
          are the same live as local.
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-10 gap-8 md:px-0 lg:px-24 mt-24 pb-36">
          <div className="col-span-4">
            <div className="grid grid-cols-4 border rounded-xl px-8 py-8 border-blue-600 st-shadow  ">
              <div className="col-span-3 ">
                <p className="mb-2 text-blue-300 font-semibold">Solid Base</p>
                <p className=" text-gray-500">
                  Start from scratch or pick a template to deploy instantly,
                  from bots to blogs.
                </p>
              </div>
              <div>
                <img src={logo.src} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border rounded-xl px-8 py-8 border-blue-600 st-shadow mt-8">
              <div className="col-span-3 ">
                <p className="mb-2 text-blue-300 font-semibold">
                  Infrastructure as Legos
                </p>
                <p className=" text-gray-500">
                  Add a cron job, a database, or another (micro)service! Railway
                  grows with your application.
                </p>
              </div>
              <div>
                <img src={logo.src} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden md:block relative ">
            <div className="w-5 -mt-12 h-[140%] mx-auto btrack ">
              <img
                id="trainblue"
                src={train.src}
                alt=""
                className="scroll-train"
              />
            </div>
          </div>
          <div className="col-span-4">
            {" "}
            <div className="grid grid-cols-4 border rounded-xl px-8 py-8 border-blue-600 st-shadow  ">
              <div className="col-span-3 ">
                <p className="mb-2 text-blue-300 font-semibold">
                  Secrets Management
                </p>
                <p className=" text-gray-500">
                  Keep Environment Variables and Secrets for your team,
                  securely, in one place.
                </p>
              </div>
              <div>
                <img src={logo.src} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border rounded-xl px-8 py-8 border-blue-600 st-shadow mt-8">
              <div className="col-span-3 ">
                <p className="mb-2 text-blue-300 font-semibold">Railway CLI</p>
                <p className=" text-gray-500">
                  Connect to your infrastructure + secrets, from any terminal in
                  the world.
                </p>
              </div>
              <div>
                <img src={logo.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="trainScroll.js"></script>
    </>
  );
};

export default Boarding;

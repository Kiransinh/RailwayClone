import imageblury from "@/images/homeImages/deployments-sc--dark.svg";
import imaggit from "@/images/homeImages/computer-city-lines--dark.svg";

const IntialSection = () => {
  return (
    <div>
      <div className="container w-screen-lg mx-auto px-5 intialblock-bg ">
        <div className="grid grid-cols-2 gap-4 mt-24 ">
          <div className="flex flex-col z-10">
            <div className="text-huge mb-11">
              Bring your code, <br /> we'll handle the rest.{" "}
            </div>
            <div className="text-small  mb-11 text-justify ">
              Made for any language, for projects big and small. Railway is the
              cloud that takes the complexity out of shipping software.
            </div>
            <div>
              <a
                href=""
                className="str-prject-btn font-semibold px-11 py-3 rounded"
              >
                {" "}
                Start a New Project
              </a>
            </div>
          </div>
          <div className="mb-">
            <div className="">
              <img
                src={imaggit.src}
                alt=""
                className="absolute top-[40%] translate-y-9/10 h-52 left-[25%]"
              />
            </div>
            <div className="overflow-hidden">
              <img src={imageblury.src} alt="" className="float-right " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntialSection;

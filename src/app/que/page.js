import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="bg-white py-4">
        <Image
          src="/mainLogo.png"
          alt="Contact Us Image"
          width={300}
          height={100}
          className="object-cover mx-auto"
        />
      </div>
      <div className="container mx-auto max-w-5xl p-8 scrolable">
        <div className="flex flex-col items-start justify-start h-screen p-8 text-white scrolable-content">
          {/* Display user details */}
          <div className="space-y-4">
            <div className="flex space-x-2 pb-6">
              <span className="font-medium text-2xl">01.</span>
              <div>
                <h4 className="font-medium text-2xl">Full Name</h4>
                <p className="text-2xl font-thin thin-text">John Smith</p>
              </div>
            </div>
            <div className="flex space-x-2 pb-6">
              <span className="font-medium text-2xl">02.</span>
              <div>
                <h4 className="font-medium text-2xl">Email Address</h4>
                <p className="text-2xl font-thin thin-text">
                  JohnSmith@abc.com
                </p>
              </div>
            </div>
            <div className="flex space-x-2 pb-6">
              <span className="font-medium text-2xl">03.</span>
              <div>
                <h4 className="font-medium text-2xl">Contact Number</h4>
                <p className="text-2xl font-thin thin-text">+94 771234567</p>
              </div>
            </div>
          </div>

          {/* Form input section inside a container */}
          <div className="mt-12 w-full">
            <div className="">
              <div className="flex items-center space-x-2">
                <div className="">
                  <Image
                    src="/que.svg"
                    alt="Contact Us Image"
                    width={28}
                    height={28}
                    className="object-cover mx-auto"
                    style={{ opacity: "0.6" }}
                  />
                </div>
                <h3 className=" text-4xl pl-2">
                  What is the name of your company ?
                </h3>
              </div>
              <div className="pl-11">
                <div
                  className="relative mt-4 pb-2"
                  style={{ borderBottom: "0.5px solid #ffffff50" }}
                >
                  <input
                    type="text"
                    placeholder="Enter your company name to continue ..."
                    className="w-full pt-2 pr-10 bg-[#193549] outline-none "
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <div className="">
                      <Image
                        src="/send.svg"
                        alt="Contact Us Image"
                        width={23}
                        height={28}
                        className="object-cover mx-auto"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Powered by Sprout text */}
      <div className="fixed bottom-2 right-4 text-sm text-white">
        Powered by <span className="font-bold">Sprout</span>
      </div>
    </div>
  );
};

export default Contact;

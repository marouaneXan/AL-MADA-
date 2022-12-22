import img from "../../assets/shoes.jpg"
const ProductDetails = () => {
  return (
    <div className="flex justify-center mx-auto py-[38px]">
      <div className="flex flex-col md:flex-row items-center md:space-x-[68px] p-[45px] border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[25px]">
        <div className="flex flex-col items-center p space-y-6 mx-auto">
          <img
              src={img}
            className="max-w-[94.8px] max-h-[94.8px] rounded-full"
            alt="User image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {/* {user.login} */}
            khbfsk
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {/* Loaction : {user.location} */}
            khbfsk
          </span>
        </div>
        <div className="flex flex-col space-y-6 p-6">
          <div>
            <h5 className="mb-1 font-medium text-gray-900 dark:text-white">
              Bio
            </h5>
            <span className="max-w-md text-sm mt-0 block text-gray-500 dark:text-gray-400">
              {/* {user.bio} */}
            </span>
          </div>
          <div>
            <p className="mb-1 font-medium text-gray-900 dark:text-white">
              Username :{" "}
              <span className="text-sm mt-0 text-gray-500 dark:text-gray-400">
                {/* {user.name} */}
              </span>{" "}
            </p>
            <p className="mb-1 font-medium text-gray-900 dark:text-white">
              Company :{" "}
              <span className="text-sm mt-0 text-gray-500 dark:text-gray-400">
                {/* {user.company} */}
              </span>{" "}
            </p>
            <p className="mb-1 font-medium text-gray-900 dark:text-white">
              Blog :{" "}
              <span className="text-sm mt-0 text-gray-500 dark:text-gray-400">
                {/* {user.blog} */}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

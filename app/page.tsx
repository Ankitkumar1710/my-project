import Image from "next/image";
import { BiBath, BiBed, BiHeart } from "react-icons/bi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 md:p-8 sm:p-24">
      {/* <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"> */}
      <div className="flex flex-col md:flex-row shadow bg-gray-100 rounded-lg ">
        <img
          className="object-cover relative md:h-auto md:w-48 rounded-t-lg sm:rounded-l-lg"
          src="../helicopter-g32998c124_1280.jpg"
          alt=""
        />
        <BiHeart className="absolute w-7 h-7 mt-2 ml-2 white" color="white" />
        <div className="flex flex-col gap-x-6  px-4 justify-center pt-2 sm:pt-0 border-r border-gray-300">
          <div className="flex  gap-x-4 py-1">
            <p className="sm:text-sm text-xs  text-gray-900 dark:text-white uppercase">
              DETACHED House
            </p>
            <p className=" sm:text-sm text-xs text-gray-900 dark:text-white uppercase">
              .5Y old
            </p>
          </div>
          <h5 className=" text-3xl font-normal  text-gray-900 dark:text-white">
            $75,000
          </h5>
          <p className="sm:text-sm text-xs text-gray-500 dark:text-gray-400 py-1">
            742 evergreen terrace
          </p>
        </div>
        {/* <div className="flex-none md:flex-col"> */}
        <div className="flex flex-col items-left justify-center border-r border-gray-300 px-4 py-2 bg-blue-100 md:bg-gray-100 sm:bg-blue-100">
          <div className="pb-1 sm:pb-2">
            <p className=" sm:text-sm text-xs text-gray-700 dark:text-white uppercase ">
              Realtor
            </p>
          </div>
          <div className="flex items-center gap-x-6">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-sm sm:text-base font-medium leading-6 tracking-tight text-gray-900">
                Leslie Alexander
              </h3>
              <p className="font-normal text-sm sm:text-base text-gray-500">5555-555-000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-6  px-4 justify-center pb-2 sm:pb-0">
          <div className="flex  gap-x-6">
            <BiBath className="w-8 h-8 p-1 " />
            <h3 className="text-base font-medium leading-7 tracking-tight text-gray-900">
              2 Bathrooms
            </h3>
          </div>
          <div className="flex items-center gap-x-6">
            <BiBed className="w-8 h-8 p-1" />
            <h3 className="text-base font-medium leading-7 tracking-tight text-gray-900">
              2 Bathrooms
            </h3>
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
}

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/shared/Data";

function Search() {
  return (
    <div
      className="p-4 md:p-6 bg-white rounded-lg md:rounded-full shadow-md flex flex-col md:flex-row md:items-center gap-6 md:gap-8 
      w-full max-w-md md:max-w-4xl mx-auto"
    >
      {/* Cars Select */}
      <div className="flex flex-col md:flex-1 gap-2">
        <label className="text-sm font-medium text-gray-700 md:hidden">Cars</label>
        <Select>
          <SelectTrigger className="outline-none border border-gray-300 md:border-none rounded-md md:rounded-full w-full shadow-sm md:shadow-none focus:ring-2 md:focus:ring-0 focus:ring-primary focus:border-primary">
            <SelectValue placeholder="Select Car" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">New</SelectItem>
            <SelectItem value="dark">Old</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Separator for desktop */}
      <Separator orientation="vertical" className="hidden md:block" />

      {/* Brands Select */}
      <div className="flex flex-col md:flex-1 gap-2">
        <label className="text-sm font-medium text-gray-700 md:hidden">Brands</label>
        <Select>
          <SelectTrigger className="outline-none border border-gray-300 md:border-none rounded-md md:rounded-full w-full shadow-sm md:shadow-none focus:ring-2 md:focus:ring-0 focus:ring-primary focus:border-primary">
            <SelectValue placeholder="Select Brand" />
          </SelectTrigger>
          <SelectContent>
            {Data.Brands.map((brand) => (
              <SelectItem key={brand.id} value={brand.name}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Separator for desktop */}
      <Separator orientation="vertical" className="hidden md:block" />

      {/* Pricing Select */}
      <div className="flex flex-col md:flex-1 gap-2">
        <label className="text-sm font-medium text-gray-700 md:hidden">Pricing</label>
        <Select>
          <SelectTrigger className="outline-none border border-gray-300 md:border-none rounded-md md:rounded-full w-full shadow-sm md:shadow-none focus:ring-2 md:focus:ring-0 focus:ring-primary focus:border-primary">
            <SelectValue placeholder="Select Price" />
          </SelectTrigger>
          <SelectContent>
            {Data.Pricing.map((price) => (
              <SelectItem key={price.id} value={price.amount}>
                {price.amount}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div className="flex justify-center md:justify-start mt-4 md:mt-0">
        <CiSearch
          className="text-[40px] md:text-[50px] text-white bg-primary p-3 md:p-4 rounded-full 
          hover:scale-110 transition-all cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Search;

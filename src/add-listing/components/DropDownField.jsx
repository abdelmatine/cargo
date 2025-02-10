import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function DropDownField({item, handleInputChange}) {
  return (
    <div>
        <Select 
        required={item.required} 
        onValueChange={(value) => handleInputChange(item.name,value)}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
            {item?.options?.map((option,index)=>(

            <SelectItem key={index} value={option}>{option}</SelectItem>
            ))}
        </SelectContent>
        </Select>

    </div>
  )
}

export default DropDownField
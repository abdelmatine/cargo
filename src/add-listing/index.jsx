import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { useState } from 'react'
import carDetails from './../shared/carDetails.json'
import features from './../shared/features.json'
import DropDownField from './components/DropDownField'
import InputField from './components/InputField'
import TextAreaField from './components/TextAreaField'

function AddListing() {

    const [formData, setFormData] = useState([]);
     const handleInputChange = (name, value) => {
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        console.log(formData);
    }
    
    const onSubmit=(e) => {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Car Listing</h2>
            <form className='p-10 border rounded-xl mt-10'>
                {/* Car Details */}
                <div>
                    <h2 className='font-medium text-xl mb-6'>
                        Car Details
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>{carDetails.carDetails.map((item, index)=>(
                        <div key={index}>
                            <label className='text-sm font-semibold text-muted-foreground'>{item?.label} {item.required&&<span className='text-red-500 font-bold'>*</span>}</label>
                            {item.fieldType=='text' || item.fieldType=='number' 
                            ? <InputField item={item} handleInputChange={handleInputChange} /> 
                            : item.fieldType=='dropdown'
                            ?<DropDownField item={item} handleInputChange={handleInputChange}/>
                            : item.fieldType=='textarea'
                            ?<TextAreaField item={item} handleInputChange={handleInputChange}/>
                            : null}
                        </div>

                    ))}</div>
                </div>

                {/* features List */}
                <Separator className='my-6'/>
                <div>
                    <h2 className='font-medium text-xl my-6'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {features.features.map((item, index)=>(

                            <div key={index} className='flex gap-2 items-center'>
                                {item.fieldType == 'checkbox' ? <> <Checkbox onCheckedChange={(value)=>handleInputChange(item.name,value)}/> <h2 className='text-sm font-semibold'>{item.label}</h2> </>
                                :item.fieldType == 'text' ? <><label className='text-sm font-semibold text-muted-foreground'>{item?.label}</label><InputField item={item}/></>
                                : null}
                            </div>
                        
                        ))}

                        <div>
                            
                        </div>
                    </div>
                </div>


                {/* Car Images */}
                <div className='mt-10 flex justify-end'>
                    <Button type="submit" onClick={(e) => onSubmit(e)}>Submit</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing
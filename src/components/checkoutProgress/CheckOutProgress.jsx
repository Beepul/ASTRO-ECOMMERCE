import React from 'react'

const CheckOutProgress = ({activeStep = 0}) => {
  return (
    <div className='flex flex-wrap mb-5'>
        {
            ['User Login', 'Shipping Address','Payment Method', 'Place Order'].map((step,index)=>(
                <div key={index} className={`flex-1 border-b-2 text-center py-3 ${index <= activeStep ? 'border-teal-500 text-teal-500' : 'border-gray-400 text-gray-400'}`}>{step}</div>
            ))
        }
    </div>
  )
}

export default CheckOutProgress
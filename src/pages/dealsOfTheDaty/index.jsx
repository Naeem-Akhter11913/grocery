import React from 'react'
import DealsOfTheDay from '../../components/slider/Deals/DealsOfTheDay'

const Index = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {Array(4).fill(null).map(() => (
                <DealsOfTheDay />
            ))}
        </div>
    )
}

export default Index
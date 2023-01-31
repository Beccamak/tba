import { createContext, useState } from "react";


export const FilterDetails = createContext({
   priceValueDefault: {
    min: 0,
    max: 0
   }
})

export const FilterDetailsProvider = ({children})=> {
    const [priceValueDefault, setPriceValueDefault] = useState(0);

    const value= {priceValueDefault}
    return <FilterDetails.Provider value={value}>{children}</FilterDetails.Provider>
}
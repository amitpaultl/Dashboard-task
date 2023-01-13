import React, { createContext, useState } from 'react';
export const context = createContext();

const Context = ({ children }) => {

        // toggle btu add
        const [btu, setBtu] = useState(true)


        const contextInfo = {setBtu, btu}


    return (
        <div>
            <context.Provider value={contextInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default Context;
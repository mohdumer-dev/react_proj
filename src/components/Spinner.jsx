import React from 'react'

const Spinner = () => {
    return (
        <div className="h-54 mt-4 text-center w-56 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}

export default Spinner
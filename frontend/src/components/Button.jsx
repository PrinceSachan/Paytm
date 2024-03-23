export const Button = ({label, onClick, type}) => {
    return (
        <div>
            <button 
                onClick={onClick} 
                className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mt-4 mb-2"
                type={type}
            >{label}</button>
        </div>
    )
}
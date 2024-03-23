export const InputBox = ({label, placeHolderName, onChange}) => {
    return (
        <div>
            <div className="text-sm font-semibold py-2 text-left">{label}</div>
                <input 
                    type="text" 
                    className="block w-full px-2 py-1 border border-gray-300 rounded outline-none"
                    placeholder={placeHolderName}
                    onChange={onChange}
                />
        </div>
    )
}
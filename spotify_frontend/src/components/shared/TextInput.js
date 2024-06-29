const TextInput = ({label, placeholder, className, value, setValue, labelClassName}) => {
    return(
        <div className={`textInputDiv flex flex-col space-y-z w-full ${className}`}>
            {/*<label htmlFor={label} className={`font-semibold ${labelClassName}`}></label>*/}
            <label htmlFor={label} className="font-semibold text-white">{label}</label>
    <input 
        type="text" 
        placeholder={placeholder} 
        className="p-2 border border-gray-300 border-solid rounded placeholder-gray-500" 
        id={label}
        value={value}
        onChange={(e) => {setValue(e.target.value);
        }}
    />
    </div>
    );
};
export default TextInput;
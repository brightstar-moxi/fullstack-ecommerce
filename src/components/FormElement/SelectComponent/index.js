

export default function SelectComponent({label, value, onChange}){

    return(
        <div className="relative">
            <p className="pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600">
                {label}
            </p>
            <select value={value} onChange={onChange}>

            </select>

        </div>
    )
}
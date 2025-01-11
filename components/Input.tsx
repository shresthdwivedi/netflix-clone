interface InputProps {
    id: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string,
    label: string,
    type?: string,
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type,
}) => {
    return (
        <div className="relative">
            <input
                id={id}
                onChange={onChange}
                value={value}
                type={type}
                className="block rounded-md w-full px-6 pt-6 pb-1 text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-slate-50 focus:ring-offset-slate-900 peer"
                placeholder=" "
            />
            <label 
                htmlFor={label}
                className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 left-6 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                {label}
            </label>
        </div>
    );
}

export default Input;
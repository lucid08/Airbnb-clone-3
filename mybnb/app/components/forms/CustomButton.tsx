interface CustomButtonProps {
    label : string;
    className?: string;
    onClick: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick,
    className
}) => {
  return (
    <div
    onClick = {onClick}
    className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark rounded-xl text-center ${className} text-white transition cursor-pointer`}>{label}</div>
  )
}

export default CustomButton
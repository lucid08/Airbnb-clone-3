'use client';

interface MenuLinkProps {
    label:string;
    onClick: () => void;
}
const MenuLink:React.FC<MenuLinkProps> = ({
  label,
  onClick
}) => {
  return (
    <div onClick={onClick} className="px-4 py-5 hover:bg-gray-100 transtion">{label}</div>
  )
}

export default MenuLink
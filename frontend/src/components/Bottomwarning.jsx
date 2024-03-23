import { Link } from "react-router-dom"

export const Bottomwarning = ({label, to, linkName}) => {
    return (
        <div>
            <div>
                {label}
            </div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
                {linkName}
            </Link>
        </div>
    )
}
import Link from "next/link"
export default function NavLink({ children, active = false, ...props }) {
  return (
    <Link
      {...props}
      className={`
        text-primary
        font-bold
        text-lg
        relative 
        ${active 
          ? 
            "underline decoration-2 underline-offset-8"
          :
            "hover:underline hover:underline-offset-8 hover:decoration-2"
        }
      `}
    >
      {children}
    </Link>
  )
}

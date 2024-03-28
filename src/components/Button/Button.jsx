
const Button = ({children}) => {
  return (
     <button
        className="group relative inline-block rounded-lg overflow-hidden border border-secondary px-8 py-3 focus:outline-none focus:ring">
      
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-secondary"
  ></span>

  <span
    className="relative text-sm font-medium text-secondary transition-colors group-hover:text-white"
  >
    {children}
  </span>
          
    </button>
 

  )
}

export default Button
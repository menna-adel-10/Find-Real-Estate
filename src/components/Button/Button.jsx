
const Button = ({children}) => {
  return (
     <button
        className="group relative inline-block rounded-lg overflow-hidden border border-blue-500 px-8 py-3 focus:outline-none focus:ring">
      
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-blue-500 transition-all group-hover:w-full group-active:bg-blue-500"
  ></span>

  <span
    className="relative text-sm font-medium text-blue-500 transition-colors group-hover:text-white"
  >
    {children}
  </span>
          
    </button>
 

  )
}

export default Button
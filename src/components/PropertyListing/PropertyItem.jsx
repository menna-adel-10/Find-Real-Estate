import { Link } from "react-router-dom"
import Button from "../Button/Button";

const PropertyItem = ({ property }) => {
  const { id, image, city, area, price } = property;

  return (
    <div>
      <div className="p-1 cursor-pointer transition-all duration-300 border-gray-200 rounded-lg hover:shadow-md" key={id}>
              <Link to={`/property/${id}`}>
                  <img
                      src={image}
                      alt=""
                      width={400}
                      height={350}
                      className="rounded-t-lg h-[170px] object-cover hover:scale-95 transition duration-300"
                  />
              </Link>
              <div className="flex justify-between p-3 items-center">
        <div>
        <h2 className="font-medium line-clamp-1 text-[13px] md:text-[16px]">
          {city}
        </h2>
        <h2 className="text-[10px] md:text-[14px] text-gray-400 flex gap-1 items-center">
          {area}
        </h2>
        </div>
        <h2 className="md:text-[16px] text-[14px]">{price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD', 
        })}</h2>
          
        </div>
      
          <Link to={`/property/${id}`}
           className="w-full h-10 mx-auto my-4 flex justify-center items-center text-white">
             <Button>Details</Button>
          </Link>
        
      </div>
      
    </div>
  )
}

export default PropertyItem
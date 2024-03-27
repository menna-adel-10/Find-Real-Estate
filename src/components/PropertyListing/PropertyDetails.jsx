import { useParams } from "react-router-dom"
import { properties } from '../../data/data'; 
import SkeletonInfo from "../Skeleton/SkeletonInfo"
import Card from "../Card/Card";


const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id);

  if (!property) {
    return <section className="p-4 h-screen block m-3">Loading...
      <div className="mx-auto mt-10 justify-center items-center">
        <SkeletonInfo />
      </div>
    </section>
  }

  const { image, image2} = property;

  return (
    <section className="py-16 px-5 lg:py-32 h-screen mx-auto sm:mx-20 mb-60 md:mb-20 mt-20">
  <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 mx-auto">
    <div className="relative col-span-12 lg:col-span-6 flex justify-center items-center">
      <img
        src={image}
        alt=""
        className="w-[300px] h-[335px] object-cover rounded-lg transition-all duration-500 md:w-[60%] lg:max-w-sm mx-auto mb-4 opacity-100 hover:opacity-0"
          />
        <img src={image2} alt="hover-img" className="w-[300px] h-[335px] object-cover rounded-lg absolute inset-0 transition-all duration-500 md:w-[60%] lg:max-w-sm mx-auto mb-4 opacity-0 hover:opacity-100" />  
          
    </div>
    <div className="col-span-12 lg:col-span-6">
          <Card property={property} />
    </div>
  </div>
</section>

  )
}

export default PropertyDetails
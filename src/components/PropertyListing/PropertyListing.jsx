import { properties } from '../../data/data'; 
import PropertyItem from './PropertyItem';

const PropertyListing = ({ propertyData }) => {
  return (

    <div>
      <section className="py-16 mx-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {properties.map((property) => {
              return <PropertyItem property={property} key={property.id}/>
            })}
    </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyListing;
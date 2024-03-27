import { useEffect, useState } from 'react';
import { properties } from '../../data/data'; 
import PropertyListing from './PropertyListing';

const PropertySection = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    setPropertyData(properties);
  }, []);

  return (
    <div className="px-10 md:px-20 mt-10">
      <h2 className="my-4 text-xl">All Categories</h2>
      <PropertyListing properties={propertyData} />
    </div>
  );
};

export default PropertySection;
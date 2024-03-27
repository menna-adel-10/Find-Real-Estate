
const Card = ({ property }) => {
     const { price, city, address, type, floorspace, amenities } = property;
  return (
  <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-md">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">City | Address:</dt>
                  <dd className="text-gray-700 sm:col-span-2">{city} | {address}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Address:</dt>
      <dd className="text-gray-700 sm:col-span-2">{address}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Type:</dt>
      <dd className="text-gray-700 sm:col-span-2">{type}</dd>
              </div>
              
    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Floor Space:</dt>
      <dd className="text-gray-700 sm:col-span-2">{floorspace} m²</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Price:</dt>
      <dd className="text-gray-700 sm:col-span-2">{price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD', 
            })}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Amenities:</dt>
      <dd className="text-gray-700 sm:col-span-2">
        <div className="block">
                          <p> {amenities.beds} Beds,</p>
                          <p>{amenities.baths} Baths,</p>
                          <p>{amenities.parking} Parking,</p>
                          <p className="font-medium uppercase mt-2">Construction: {amenities.construction}</p>
        </div>
      </dd>
    </div>
  </dl>
</div>
  )
}

export default Card
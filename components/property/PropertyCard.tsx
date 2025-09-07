import React from "react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    image: string;
    price: number;
    location: string;
    // Add other property fields as needed
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-semibold">${property.price}</p>
    </div>
  );
};

export default PropertyCard;

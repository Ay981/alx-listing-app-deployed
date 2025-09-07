import React from "react";

interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    image: string;
    price: number;
    location: string;
    description?: string;
    // Add other property fields as needed
  };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-semibold text-lg">${property.price}</p>
      {property.description && <p className="mt-2">{property.description}</p>}
    </div>
  );
};

export default PropertyDetail;

import React from "react";

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1587303150330-3d974f5a4d7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1518173946687-a4c8893ac7b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1597754699517-0e4b6d8c6e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    ];

    return (
        <div className="bg-green-100 py-10">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
                Go Green Gallery
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={image}
                            alt={`Plantation ${index + 1}`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
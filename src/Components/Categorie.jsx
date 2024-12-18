import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Categorie() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => {
                console.error(error);
                setError("Failed to fetch products."); // Set error message
            });
    }, []);

    console.log(products);

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shop by category</h2>
                </div>

                {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map(product => (
                        <Link
                            to={`/shop/${product.routeName}`} // Pass routeName as part of the URL
                            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            key={product.id} // Use a unique identifier
                        >
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{product.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categorie;
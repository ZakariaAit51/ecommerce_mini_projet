import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom';


function Shop() { 
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); // State for error handling
  const { routeName } = useParams();
    
  useEffect(() => { 
    if (routeName) { // Check if routeName is defined
      axios.get(`http://localhost:5000/products?routeName=${routeName}`) 
        .then(response => setProducts(response.data[0].items)) 
        .catch(error => {
          console.error(error);
          setError("Failed to fetch products."); // Set error message
        }); 
    }
  }, [routeName]); // Include routeName in the dependency array
  console.log(products);

  return ( 
    <div> 
      <h1>Shop</h1> 
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12"> 
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0"> 
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"> 
            {products.map(product => ( 
              <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"> 
                <div className="h-56 w-full"> 
                  <a href="#"> 
                    <img className="mx-auto h-full" src={product.imageUrl} alt={product.name} /> 
                  </a> 
                </div> 
                <div className="pt-6"> 
                  <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{product.name}</a> 
                  <div className="mt-4 flex items-center justify-between gap-4"> 
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{product.price} DH</p> 
                    <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> 
                      <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> 
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" /> 
                      </svg> 
                      Add to cart 
                    </button> 
                  </div> 
                </div> 
              </div> 
            ))} 
          </div> 
          <div className="w-full text-center"> 
            <button type="button" className="rounded-lg border border gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button> 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
} 

export default Shop;
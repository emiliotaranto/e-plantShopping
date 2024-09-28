import React, { useState } from 'react';
import './ProductList.css'; // Assicurati che questo file esista e contenga gli stili necessari
import { useDispatch } from 'react-redux'; // Importa useDispatch per gestire le azioni Redux
import { addItem } from './CartSlice'; // Assicurati di importare il reducer addItem da CartSlice.jsx

function ProductList() {
    const [addedToCart, setAddedToCart] = useState({}); // Stato per tracciare gli elementi aggiunti al carrello
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/02/03/16/45/spider-plant-3120128_1280.jpg",
                    description: "Removes carbon monoxide and other toxins from the air.",
                    cost: "$10"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/08/06/10/00/flower-4387842_1280.jpg",
                    description: "Breaks down and neutralizes toxic gases like carbon monoxide and formaldehyde.",
                    cost: "$20"
                }
            ]
        },
        {
            category: "Succulents",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2016/11/29/02/27/aloevera-1869941_1280.jpg",
                    description: "Easy to care for and great for soothing skin injuries.",
                    cost: "$12"
                },
                {
                    name: "Echeveria",
                    image: "https://cdn.pixabay.com/photo/2018/03/05/23/02/plant-3206932_1280.jpg",
                    description: "Beautiful rosettes with stunning colors, ideal for indoor decoration.",
                    cost: "$8"
                },
                {
                    name: "Jade Plant",
                    image: "https://cdn.pixabay.com/photo/2017/05/11/18/22/jade-plant-2302522_1280.jpg",
                    description: "Symbol of good luck and prosperity, easy to maintain.",
                    cost: "$15"
                }
            ]
        },
        {
            category: "Flowering Plants",
            plants: [
                {
                    name: "Orchid",
                    image: "https://cdn.pixabay.com/photo/2017/08/07/22/26/orchid-2608193_1280.jpg",
                    description: "Elegant flowers that come in various colors, perfect for brightening up a room.",
                    cost: "$25"
                },
                {
                    name: "African Violet",
                    image: "https://cdn.pixabay.com/photo/2018/01/25/12/12/african-violet-3108568_1280.jpg",
                    description: "Compact flowering plant with blooms that last for weeks.",
                    cost: "$10"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2016/10/15/11/14/peace-lily-1748920_1280.jpg",
                    description: "Known for its air purifying qualities and beautiful white flowers.",
                    cost: "$20"
                }
            ]
        }
    ];

    // Funzione per gestire l'aggiunta al carrello
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant)); // Invia l'azione addItem con il plant selezionato
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true, // Segna la pianta come aggiunta al carrello
        }));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <div className="plants-container">
                        {category.plants.map((plant, idx) => (
                            <div className="plant-card" key={idx}>
                                <img src={plant.image} alt={plant.name} className="plant-image" />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p>{plant.cost}</p>
                                <button
                                    className="add-to-cart-button"
                                    onClick={() => handleAddToCart(plant)}
                                    disabled={addedToCart[plant.name]} // Disabilita il pulsante se la pianta è già nel carrello
                                >
                                    {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

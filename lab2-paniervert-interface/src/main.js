import { createApp } from 'vue'

createApp({
    data: function() {
        return {
            // Le catalogue des produits disponibles:
            products: [
                {
                    id: 'chaise',
                    name: 'Chaise verte',
                    price: 29.99,
                    desc: 'Une chaise en plastique, de couleur verte.',
                    image: 'products/chaise.jpg'
                },
                {
                    id: 'plante',
                    name: 'Plante verte',
                    price: 45.99,
                    desc: 'Une plante avec un feuillage vert.',
                    image: 'products/plante.jpg'
                },
                {
                    id: 'bonhomme',
                    name: 'Petit bonhomme vert',
                    price: 3.99,
                    desc: 'Ils viennent en paix.',
                    image: 'products/bonhomme.jpg'
                },
                {
                    id: 'pomme',
                    name: 'Pomme verte',
                    price: 0.99,
                    desc: 'Un fruit qui vient du pommier.',
                    image: 'products/pomme.jpg'
                },
                {
                    id: 'tshirt',
                    name: 'T-shirt vert',
                    price: 23.99,
                    desc: 'Un gaminet dans notre couleur préférée.',
                    image: 'products/tshirt.jpg'
                },
                {
                    id: 'voiture',
                    name: 'Voiture verte',
                    price: 20995.00,
                    desc: 'Elle est littéralement verte mais émet tout de même des GES.',
                    image: 'products/voiture.jpg'
                },
                {
                    id: 'panier',
                    name: 'Panier vert',
                    price: 7.95,
                    desc: 'Toute est dans toute.',
                    image: 'products/panier.jpg'
                }
            ],
            // Les produits ajoutés au panier, avec leur quantité:
            cart: [
                {
                    id: 'plante',
                    name: 'Plante verte',
                    price: 45.99,
                    desc: 'Une plante avec un feuillage vert.',
                    image: 'products/plante.jpg',
                    quantity: 1,
                },
                {
                    id: 'panier',
                    name: 'Panier vert',
                    price: 7.95,
                    desc: 'Toute est dans toute.',
                    image: 'products/panier.jpg',
                    quantity: 2
                }
            ]
        };
    },
    methods: {
        addToCart: function(product) {
            // Exercice 1.5 : faire en sorte que l'ajout d'un produit au panier incrémente
            // la quantité si le produit est déjà présent dans le panier.
            cart.push(product);
        }
    }
}).mount('#app')

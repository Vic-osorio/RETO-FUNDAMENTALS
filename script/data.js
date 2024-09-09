const products = [
    {
        img: "/images/image1.png",
        descuento: "",
        nombre: "Limón",
        precio: 3000,
    },
    {
        img: "/images/image2.png",
        descuento: "",
        nombre: "Tomate",
        precio: 4500,
    },
    {
        img: "/images/image3.png",
        descuento: "",
        nombre: "Aguacate",
        precio: 6800,
    },
    {
        img: "/images/image4.png",
        descuento: "",
        nombre: "Lechuga",
        precio: 3800,
    },
    {
        img: "/images/image5.png",
        descuento: "",
        nombre: "Tomate Verde",
        precio: 4600,
    },

    {
        img: "/images/image11.png",
        descuento: "",
        nombre: "Pechuga De Pavo",
        precio: 14600,
    },
    
    {
        img: "/images/image12.png",
        descuento: "",
        nombre: "Pan Tajado",
        precio: 16600,
    },
    {
        img: "/images/image13.png",
        descuento: "",
        nombre: "Mayonesa",
        precio: 7500,
    },
    {
        img: "/images/image14.png",
        descuento: "",
        nombre: "Crema Dental",
        precio: 4900,
    },
    {
        img: "/images/image15.png",
        descuento: "",
        nombre: "Panal De Huevos",
        precio: 4900,
    }
];

const mostrar = document.getElementById("resultMostrar");
const productModal = document.getElementById("productModal");
const modalProductDetails = document.getElementById("modalProductDetails");
const relatedProducts = document.getElementById("relatedProducts");
const closeModal = document.querySelector(".close");

let selectedProducts = [];

function showProductModal(productName) {
    const product = products.find(p => p.nombre === productName);
    if (!product) return;

    modalProductDetails.innerHTML = `
        <img src="${product.img}" alt="${product.nombre}" />
        <h3>${product.nombre}</h3>
        <p>Precio: $${product.precio.toLocaleString()}</p>
        <button onclick="addToSelectedProducts('${product.nombre}')">Agregar</button>
        <button onclick="removeFromSelectedProducts('${product.nombre}')">Quitar</button>
    `;

    // Limpiar productos relacionados
    relatedProducts.innerHTML = '';

    // Mostrar productos relacionados (simulación simple)
    const related = products.filter(p => p.nombre !== product.nombre);
    related.forEach(p => {
        const relatedCard = document.createElement("div");
        relatedCard.className = "related-product";
        relatedCard.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}" />
            <h4>${p.nombre}</h4>
            <p>$${p.precio.toLocaleString()}</p>
            <button onclick="addToSelectedProducts('${p.nombre}')">Agregar</button>
        `;
        relatedProducts.appendChild(relatedCard);
    });

    productModal.style.display = "block";
}



function addToSelectedProducts(productName) {
    const product = products.find(p => p.nombre === productName);
    if (product && !selectedProducts.includes(product)) {
        selectedProducts.push(product);
    }
}

function removeFromSelectedProducts(productName) {
    selectedProducts = selectedProducts.filter(p => p.nombre !== productName);
}

function closeModalFunction() {
    productModal.style.display = "none";
}

products.forEach((product) => {
    const { img, nombre, precio, descuento } = product;
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${img}" alt="${nombre}" />
    <h3>${nombre}</h3>
    <h4>${descuento ? descuento : 'Sin Descuento'}</h4>   
    <p>$${precio.toLocaleString()}</p>
    <button onclick="showProductModal('${nombre}')">Agregar</button>
`;

    mostrar.appendChild(card);
});

closeModal.onclick = closeModalFunction;

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == productModal) {
        productModal.style.display = "none";
    }
};

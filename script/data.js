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
        nombre: "Tomate Verde ",
        precio: 4600,
        
    },

    {
        img: "/images/image11.png",
        descuento: " ",
        nombre: "Pechuga De Pavo ",
        precio: 14600,
        
    },


    {
        img: "/images/image12.png",
        descuento: " ",
        nombre: "Pan Tajado ",
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
        descuento: " ",
        nombre: "Crema Dental",
        precio: 4900,
        
    }
    ,   

    {
        img: "/images/image15.png",
        descuento: "",
        nombre: "Panal De Huevos",
        precio: 4900,
        
    },

]
    
//  MOSTRAR PRODUTOS EN EL DOM

document.addEventListener("DOMContentLoaded", function () {
    const mostrar = document.getElementById("resultMostrar");
    
    const arrayLocal  = JSON.parse(localStorage.getItem("productos")) || products;

    arrayLocal.forEach((element) => {
        const { img, nombre, precio, descuento,} = element;
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src=${img} alt="img"/>
            <h3>${nombre}</h3>
            <h4>${descuento}</h4>
            <p>${precio}</p>
            `   ;

        mostrar.appendChild(card);

    });


    });
    

import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

const estiloInline = {
    border: '1px solid #ccc', // Considerando que 'surface-border' é uma cor de borda neutra
    borderRadius: '12px', // O valor de 'border-round' geralmente é 12px
    margin: '16px', // 'm-2' geralmente é 16px (dependendo do framework CSS utilizado)
    textAlign: 'center', // 'text-center' alinha o texto ao centro
    paddingTop: '20px', // 'py-5' é o espaçamento no eixo Y
    paddingBottom: '20px',
    paddingLeft: '12px', // 'px-3' é o espaçamento no eixo X
    paddingRight: '12px',
  };

  const estiloInline2 = {
    width: '100%', // w-full
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-2 (ajuste conforme necessário)
  };

function CircularDemo({ imagem, imagem2, imagem3, imagem4 }) {
    const [imagens, setImages] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        // Define a lista de URLs das imagens a partir das props
        setImages([imagem, imagem2, imagem3]);
    }, [imagem, imagem2, imagem3]);

    const imageTemplate = (imageUrl) => {
        return (
            <div style={estiloInline}>
                <img src={imageUrl} alt="Imagem do Carrossel" style={estiloInline2} />
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel 
                value={imagens} 
                numVisible={3} 
                numScroll={1} 
                responsiveOptions={responsiveOptions} 
                className="custom-carousel" 
                circular 
                autoplayInterval={3000} 
                itemTemplate={imageTemplate} 
            />
        </div>
    );
}
export default CircularDemo;

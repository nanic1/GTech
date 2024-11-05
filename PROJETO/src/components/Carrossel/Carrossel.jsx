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

function CircularDemo({ imagem, imagem2, imagem3 }) {
    const [images, setImages] = useState([]);

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
                value={images} 
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


        















// function Carrossel() {

//     const breakPoints = [
//         {width: 1, itemToShow: 1},
//         {width: 550, itemToShow: 2, itemToScroll: 2},
//         {width: 768, itemToShow: 3},
//         {width: 1200, itemToShow: 4},
//     ]
//     const   [items, setItems] = useState()



//     return(
//      <div className='conteiner'>
//         <div className='controle-wrapper'>

//         </div>
//         <hr className='saparador'/>
//         <div className='carrossel-wrapper'>

//         </div>
//      </div>
//     );
// };







// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel  from 'react-bootstrap/Carousel';
  
// function App() {
//   return (
//     <div style={{display:"block", width: 700, padding: 30}}>
//       <Carousel>
//         <Carousel.Item interval={1500}> 
//           <img
//             className="d-block w-100"
//             src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
//             alt="Image One"
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={1500}>
//           <img
//           className="d-bloco w-100"
//             src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//             alt="Image Two"
//           />
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default App;
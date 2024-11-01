import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';


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
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <img src={imageUrl} alt="Imagem do Carrossel" className="w-full shadow-2" />
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
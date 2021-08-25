import React from 'react';
import { Container } from 'Components/HomepageCom/Container/Container';

import 'Styles/Homepages/Slidershow.css';
import Carousel from 'react-elastic-carousel';

function Slideshow() {
    return (
        <Container>
            <Slidershowdiv />
        </Container>
    );
}

const Slidershowdiv = () => (
    <div className="slider">
        <Carousel itemsToShow={4} pagination={false}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </Carousel>
    </div>
);

// class Slidershowdiv extends React.Component {
//     myArrow({ type, onClick, isEdge }) {
//         const pointer = type === consts.PREV ? '👈' : '👉';
//         return (
//             <button type="button" onClick={onClick} disabled={isEdge}>
//                 {pointer}
//             </button>
//         );
//     }

//     render() {
//         return (
//             <div className="slider">
//                 <Carousel
//                     itemsToShow={4}
//                     pagination={false}
//                     renderArrow={this.myArrow}
//                 >
//                     <div>1</div>
//                     <div>2</div>
//                     <div>3</div>
//                     <div>4</div>
//                     <div>5</div>
//                     <div>6</div>
//                 </Carousel>
//             </div>
//         );
//     }
// }

export default Slideshow;

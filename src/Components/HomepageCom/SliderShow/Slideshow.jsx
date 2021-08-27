import React from 'react';

import { Homepageicon } from 'Assest/Data/HomepagesData';
import 'Styles/Homepages/Slidershow.css';
import Carousel from 'react-elastic-carousel';

function Slideshow() {
    return <Slidershowdiv />;
}

function Slidershowdiv() {
    const [currentItem, setCurrentItem] = React.useState(0);
    const onCurrentChange = (current) => {
        setCurrentItem(current.index);
    };

    return (
        <div className="slider">
            <Carousel
                pagination={false}
                itemsToShow={3}
                onNextEnd={onCurrentChange}
                onPrevEnd={onCurrentChange}
            >
                {Homepageicon.map((item, i) => {
                    const className =
                        currentItem === i ? 'iconsetactive' : 'inactive';

                    return (
                        <div
                            className={`${className} iconset`}
                            id="iconset"
                            key={item.name}
                        >
                            <img src={item.image} alt="replace" />
                            <p className="iconname">{item.name}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
export default Slideshow;

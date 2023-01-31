import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "../AppSlider.scss";
import SlideDesc from "./SlideDesc.jsx";

export default function Slide({ data: { image, title, text } }) {
    return (
        <div className="slide">
            <SlideImage src={image} alt={title} />
            <SlideTitle title={title} />
            <SlideDesc text={text} />
        </div>
    );
}
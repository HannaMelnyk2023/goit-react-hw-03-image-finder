import React, { Component } from "react";

export class ImageGalleryItem extends Component {
    render() {
        const { webformatURL, largeImageURL, onClick } = this.props;
        return (
            <li className="gallery-item"
                onClick={() => onClick(largeImageURL)}>
                <img src={webformatURL} alt="" />
            </li>
        );
    }
}


import React, { Component } from "react";

export class ImageGalleryItem extends Component {
    render() {
        const { webformatURL, largeImageURL, onClick } = this.props;
        return (
            <li className="imageGalleryItem"
                onClick={() => onClick(largeImageURL)}>
                <img className ="imageGalleryItem-image" src={webformatURL} alt="" />
            </li>
        );
    }
}


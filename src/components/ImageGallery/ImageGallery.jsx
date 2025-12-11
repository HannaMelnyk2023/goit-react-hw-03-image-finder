import React, { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    render() {
        const { images, onImageClick } = this.props;
        return (
            <ul className="gallery">
                {images.map(image => (
                    <ImageGalleryItem key={image.id}
                        webformatURL={image.webformatURL}
                        largeImageURL={image.largeImageURL}
                        onClick={onImageClick}
                    />
                ))}
            </ul>
        );
}
}
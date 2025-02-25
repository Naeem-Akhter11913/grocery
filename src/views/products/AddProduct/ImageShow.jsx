import { CImage } from '@coreui/react'
import React from 'react'

const ImageShow = ({ images = [] }) => {
    return (
        <React.Fragment>
            {images.map((url, index) => <CImage key={index} rounded thumbnail src={url} width={50} height={50} />)}
        </React.Fragment>
    )
}

export default ImageShow
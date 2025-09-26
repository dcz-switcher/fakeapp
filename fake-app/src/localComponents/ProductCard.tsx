import { Typography } from "mds-react"

function ProductCard ({image = 'beach.jpg', title = '', subTitle = ''}) {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={image} alt="" />
            </div>
            <div className="product-card-content">
                <Typography variant="body1">{title}</Typography>
                <Typography>{subTitle}</Typography>
            </div>
        </div>
    )
}

export default ProductCard
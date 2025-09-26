import { Link, Typography } from "mds-react";

function ProductView({stacked = false, onClose}) {
    const stackedClass = stacked ? 'stacked' : '';

    return (
        <>
        <div className={`view ${stackedClass}`}>
            <Typography variant="h1">Product view</Typography>
            <Link href="#" onClick={onClose}>close view</Link>
        </div>
        </>
    )
}

export default ProductView;
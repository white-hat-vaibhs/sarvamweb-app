import { Card } from 'semantic-ui-react'


function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'yellow',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product.name}`
    }))
  }
  return <Card.Group stackable itemsPerRow="4" centered items={mapProductsToItems(products)} />
}

export default ProductList;

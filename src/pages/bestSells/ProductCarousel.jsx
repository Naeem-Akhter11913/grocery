// import React from 'react';

// import BestSells from '../../components/carts/BestSells';
// import { Box } from '@mui/material';

// import AliceCarousel from 'react-alice-carousel'


// const products = [
//   {
//     name: "Angie’s Boomchickapop Sweet and Wonnies",
//     brand: "Hodo Foods",
//     discountedPrice: 238.85,
//     originalPrice: 245.8,
//     sold: 90,
//     stock: 120,
//     image: 'product-14-1.jpg',
//     tag: "Sale",
//     tagColor: "blue"
//   },
//   {
//     name: "Foster Farms Takeout Crispy Classic",
//     brand: "Hodo Foods",
//     discountedPrice: 238.85,
//     originalPrice: 245.8,
//     sold: 90,
//     stock: 120,
//     image: 'product-15-1.jpg',
//     tag: "Best Sale",
//     tagColor: "orange"
//   },
//   {
//     name: "Foster Farms Takeout Crispy Classic",
//     brand: "Hodo Foods",
//     discountedPrice: 238.85,
//     originalPrice: 245.8,
//     sold: 90,
//     stock: 120,
//     image: 'product-15-1.jpg',
//     tag: "Best Sale",
//     tagColor: "orange"
//   },
//   {
//     name: "Foster Farms Takeout Crispy Classic",
//     brand: "Hodo Foods",
//     discountedPrice: 238.85,
//     originalPrice: 245.8,
//     sold: 90,
//     stock: 120,
//     image: 'product-15-1.jpg',
//     tag: "Best Sale",
//     tagColor: "orange"
//   },
//   {
//     name: "Foster Farms Takeout Crispy Classic",
//     brand: "Hodo Foods",
//     discountedPrice: 238.85,
//     originalPrice: 245.8,
//     sold: 90,
//     stock: 120,
//     image: 'product-15-1.jpg',
//     tag: "Best Sale",
//     tagColor: "orange"
//   },
//   {
//     name: "Foster Farms Takeout Crispy Classic",
//     brand: "Hodo Foods",
//     discountedPrice: 238.85,
//     originalPrice: 245.8,
//     sold: 90,
//     stock: 120,
//     image: 'product-15-1.jpg',
//     tag: "Best Sale",
//     tagColor: "orange"
//   },
//   // Add more products here...
// ];

// const ProductCarousel = () => {

//   return (
//     <Box>
//       <AliceCarousel mouseTracking >
//         {products.map(product => (
//           <BestSells
//             key={product.name}
//             product={product}
//           />
//         ))}
//       </AliceCarousel>
//     </Box>
//   );
// };

// export default ProductCarousel;


import React from 'react';
import BestSells from '../../components/carts/BestSells';
import { Box, List, ListItem, Typography } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NatureCard from './SideCarts';

const products = [
  {
    name: "Angie’s Boomchickapop Sweet and Wonnies",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-14-1.jpg',
    tag: "Sale",
    tagColor: "blue"
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-15-1.jpg',
    tag: "Best Sale",
    tagColor: "orange"
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-15-1.jpg',
    tag: "Best Sale",
    tagColor: "orange"
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-15-1.jpg',
    tag: "Best Sale",
    tagColor: "orange"
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-15-1.jpg',
    tag: "Best Sale",
    tagColor: "orange"
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-15-1.jpg',
    tag: "Best Sale",
    tagColor: "orange"
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    discountedPrice: 238.85,
    originalPrice: 245.8,
    sold: 90,
    stock: 120,
    image: 'product-15-1.jpg',
    tag: "Best Sale",
    tagColor: "orange"
  },
  // Add more products here...
];

const responsive = {
  0: { items: 1 }, // On smaller screens (mobile), show 1 item
  600: { items: 3 }, // On tablet-sized screens, show 2 items
  1024: { items: 4 } // On desktop, show 3 items at once
};

const ProductCarousel = () => {
  return (
    <Box>
      <Box component='div' className='header' >
        <Typography variant='h4' component='h4'>Popular Products</Typography>
        <List className='categories'>
          <ListItem>Featured</ListItem>
          <ListItem>Popular</ListItem>
          <ListItem>New added</ListItem>
        </List>
      </Box>
      <Box sx={{ display: 'flex', marginLeft: 3 }}>
        {/* AliceCarousel takes 70% of screen width */}
        <Box sx={{ flexGrow: 1 }}> {/* Remaining space (30%) */}
          <NatureCard />
        </Box>
        <Box sx={{ width: '70vw' }}> {/* 70% of viewport width */}
          <AliceCarousel
            mouseTracking
            items={products.map(product => (
              <Box key={product.name} sx={{ margin: '0 8px', py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2.5 }}> {/* Adds gap between items */}
                <BestSells product={product} />
              </Box>
            ))}
            responsive={responsive}
            controlsStrategy="responsive"
            autoPlay
            autoPlayInterval={3000}
            infinite
          />
        </Box>

        {/* NatureCard with remaining space */}

      </Box>
    </Box>
  );
};

export default ProductCarousel;

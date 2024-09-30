// import React from 'react';
// import { Box, Grid, Typography, IconButton, Container } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import YouTubeIcon from '@mui/icons-material/YouTube';

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: 'whitesmoke', py: 3 }}>
//       <Container>
//         <Grid container spacing={2} justifyContent="space-between" alignItems="center">
//           <Grid item xs={12} md={4}>
//             <Typography variant="body2" color="textSecondary">
//               © 2022, <span style={{ color: '#48bb78' }}>Nest</span> - HTML Ecommerce Template
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               All rights reserved
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={4} textAlign="center">
//             <Grid container spacing={2} justifyContent="center">
//               <Grid item>
//                 <PhoneIcon color="action" />
//                 <Typography variant="body1" display="inline" color="primary" sx={{ ml: 1 }}>
//                   1900 - 6666
//                 </Typography>
//                 <Typography variant="caption" display="block">
//                   Working 8:00 - 22:00
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <PhoneIcon color="action" />
//                 <Typography variant="body1" display="inline" color="primary" sx={{ ml: 1 }}>
//                   1900 - 8888
//                 </Typography>
//                 <Typography variant="caption" display="block">
//                   24/7 Support Center
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>

//           <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'right' }}>
//             <Typography variant="body2" color="textSecondary">
//               Follow Us
//             </Typography>
//             <Box>
//               <IconButton color="primary">
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton color="primary">
//                 <TwitterIcon />
//               </IconButton>
//               <IconButton color="primary">
//                 <InstagramIcon />
//               </IconButton>
//               <IconButton color="primary">
//                 <PinterestIcon />
//               </IconButton>
//               <IconButton color="primary">
//                 <YouTubeIcon />
//               </IconButton>
//             </Box>
//             <Typography variant="caption" color="textSecondary">
//               Up to 15% discount on your first subscribe
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import React from 'react';
import { Box, Grid, Typography, IconButton, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'whitesmoke', py: 3, mt: 'auto' }}>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          {/* Left Section - Copyright */}
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="textSecondary">
              © 2022, <span style={{ color: '#48bb78' }}>Nest</span> - HTML Ecommerce Template
            </Typography>
            <Typography variant="body2" color="textSecondary">
              All rights reserved
            </Typography>
          </Grid>

          {/* Center Section - Contact Info */}
          <Grid item xs={12} md={4} textAlign="center">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <PhoneIcon color="action" />
                <Typography variant="body1" display="inline" color="primary" sx={{ ml: 1 }}>
                  1900 - 6666
                </Typography>
                <Typography variant="caption" display="block">
                  Working 8:00 - 22:00
                </Typography>
              </Grid>
              <Grid item>
                <PhoneIcon color="action" />
                <Typography variant="body1" display="inline" color="primary" sx={{ ml: 1 }}>
                  1900 - 8888
                </Typography>
                <Typography variant="caption" display="block">
                  24/7 Support Center
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Section - Social Media */}
          <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'right' }}>
            <Typography variant="body2" color="textSecondary">
              Follow Us
            </Typography>
            <Box>
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary">
                <PinterestIcon />
              </IconButton>
              <IconButton color="primary">
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Typography variant="caption" color="textSecondary">
              Up to 15% discount on your first subscribe
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const App = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;

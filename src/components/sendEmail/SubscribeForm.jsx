// import React, { useState, useEffect } from "react";
// import { TextField, InputAdornment, Button, Box } from "@mui/material";
// import SendIcon from '@mui/icons-material/Send';

// const SubscribeForm = ({ onPause }) => {
//   const [typingTimeout, setTypingTimeout] = useState(null);
//   const [sendText, setSendText] = useState('');

//   const handleTyping = (e) => {
//     // Clear any previous timeout when user types
//     if (typingTimeout) clearTimeout(typingTimeout);
//     setSendText(e.target.value);
//     onPause(true);
//     const timeout = setTimeout(() => {
//       onPause(false); // Resume auto-slide after 10 seconds of inactivity
//       setSendText('');
//     }, 10000);

//     setTypingTimeout(timeout);
//   };

//   useEffect(() => {
//     return () => {
//       // Clear the timeout if the component unmounts
//       if (typingTimeout) {
//         clearTimeout(typingTimeout);
//       }
//     };
//   }, [typingTimeout]);
//   // console.log(sendText)

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         width: '34em',
//       }}
//     >
//       <TextField
//         variant="outlined"
//         placeholder="Your email address"
//         sx={{ width: '100%' }}
//         onChange={handleTyping}
//         value={sendText}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SendIcon sx={{ color: '#b0b0b0', marginLeft: 2 }} />
//             </InputAdornment>
//           ),
//           sx: {
//             '& fieldset': { border: 'none' },
//             borderRadius: '50px',
//             paddingLeft: '8px',
//             backgroundColor: '#fff',
//           },
//         }}
//       />
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: '#36B37E',
//           borderRadius: '50px',
//           textTransform: 'none',
//           position: 'absolute',
//           right: '-10px',
//           padding: '10px 24px',
//           height: '100%',
//           '&:hover': {
//             backgroundColor: '#2F9D70',
//           },
//         }}
//       >
//         Subscribe
//       </Button>
//     </Box>
//   );
// };

// export default SubscribeForm;

import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, Button, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const SubscribeForm = ({ onPause }) => {
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [sendText, setSendText] = useState('');

  const handleTyping = (e) => {
    const userInput = e.target.value;
    setSendText(userInput);

    // Clear any previous timeout
    if (typingTimeout) clearTimeout(typingTimeout);

    // If the user is typing after being paused for 10 seconds, set onPause(true)
    if (userInput && !typingTimeout) {
      onPause(true);
    }

    // Start a new timeout to detect inactivity (10 seconds)
    const timeout = setTimeout(() => {
      // If the user stops typing for 10 seconds, pause the auto-slide
      onPause(true);
      setTypingTimeout(null); // Reset typingTimeout to indicate user is inactive
    }, 10000); // 10-second delay for the debounce

    // Save the timeout ID so we can clear it if the user continues typing
    setTypingTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

  useEffect(() => {
    if (sendText.length > 0) {
      onPause(true);
    } else {
      onPause(false);
    }
  }, [sendText])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '34em',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Your email address"
        sx={{ width: '100%' }}
        onChange={handleTyping}
        value={sendText}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SendIcon sx={{ color: '#b0b0b0', marginLeft: 2 }} />
            </InputAdornment>
          ),
          sx: {
            '& fieldset': { border: 'none' },
            borderRadius: '50px',
            paddingLeft: '8px',
            backgroundColor: '#fff',
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#36B37E',
          borderRadius: '50px',
          textTransform: 'none',
          position: 'absolute',
          right: '-10px',
          padding: '10px 24px',
          height: '100%',
          '&:hover': {
            backgroundColor: '#2F9D70',
          },
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default SubscribeForm;

import Box from '@mui/material/Box';
import { motion as Motion } from 'motion/react';
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#00160d',
                zIndex: 9999,
            }}
        >
            <Motion.h1
                style={{ color: 'white' }}
                initial={{ opacity: 1.0, scale: 1.05 }}
                animate={{ opacity: 0.7, scale: .95 }}
                transition={{ duration: 0.5, repeat: Infinity }}
            >
                Loading...
            </Motion.h1>
            <Box sx={{ width: '80%' }}>
                <LinearProgress color='success' />
            </Box>
        </div>
    )
}

export default Loading
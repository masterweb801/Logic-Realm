import Box from '@mui/material/Box';
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
            <h1 style={{ color: 'white' }}>Loading...</h1>
            <Box sx={{ width: '80%' }}>
                <LinearProgress color='success' />
            </Box>
        </div>
    )
}

export default Loading
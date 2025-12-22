import './Loading.css'

const Loading = () => {
    return (
        <div style={{
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
            backgroundColor: '#fff',
            zIndex: 9999,
        }}>
            <div className="loader"></div>
        </div>
    )
}

export default Loading
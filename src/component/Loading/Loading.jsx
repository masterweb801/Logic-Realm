import './Loading.css';

const Loading = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#fff',
                zIndex: 9999,
            }}>
            <div className="super-fast-spinner"></div>
        </div>
    )
}

export default Loading
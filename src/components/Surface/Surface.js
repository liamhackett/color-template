import './Surface.css';
function Surface({ surfaceNumber }) {
    return (
        <div className={`${surfaceNumber} rad-shadow surface`}>
        {surfaceNumber}
        </div>
    );
}

export default Surface;
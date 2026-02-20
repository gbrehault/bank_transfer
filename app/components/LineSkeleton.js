const LineSkeleton = ({ height = '16px', width = '100%', maxWidth = '1000px' }) => (
  <div className="skeleton-list-item" style={{ height, width, maxWidth, display: 'block' }}></div>
);

export default LineSkeleton;

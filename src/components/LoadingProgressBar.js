const LoadingProgressBar = (props) => {
  return (
    <div className="text-center">
      <div className="h3">Loading Data...</div>
      <div className="container-slim progress progress-sm">
        <div className="progress-bar progress-bar-indeterminate"></div>
      </div>
    </div>
  );
};

export default LoadingProgressBar;

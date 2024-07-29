import React from 'react';
import { Link } from 'react-router-dom';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <p>We're sorry, but something went wrong while loading the page.</p>
          {this.state.error && <p className="error-message">{this.state.error.toString()}</p>}
          {this.state.errorInfo && <details className="error-details">{this.state.errorInfo.componentStack}</details>}
          <Link to="/" className="retry-button">Go to Home</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

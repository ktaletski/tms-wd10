import React, { ErrorInfo, FC, ReactNode } from "react";

interface Props {
  fallback?: ReactNode;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}

const ErroredComponent: FC = () => {
  throw new Error("Component crashed");
  return <h3>This component will crash!</h3>;
};

export const App: FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <ErrorBoundary>
        <ErroredComponent />
      </ErrorBoundary>
      <div>
        <div>
          <ErrorBoundary fallback={<span>Something went wrong</span>}>
            <ErroredComponent />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

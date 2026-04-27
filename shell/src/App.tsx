import { Suspense, lazy } from "react";
import Login from "./login";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard = lazy(() => import("dashboard/DashboardApp"));

export default function App() {
  const notify = (username: string) => {
    const event = new CustomEvent("login", { detail: { username } });
    document.dispatchEvent(event);
  };

  const handleSubmit = (values: Record<string, string>) => {
    if (values.username) {
      notify(values.username);
    }
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <h1>Shell App V1</h1>
        <Login onSubmit={handleSubmit} />
        <div className="mt-16" />
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

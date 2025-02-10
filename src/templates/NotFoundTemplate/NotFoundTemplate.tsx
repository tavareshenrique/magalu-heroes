import Link from 'next/link';

import { NotFoundAnimation } from './components/not-found-animation/not-found-animation';

export function NotFoundTemplate() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-screen">
      <h2 className="text-4xl font-bold text-center text-green-900">
        Not Found
      </h2>

      <NotFoundAnimation />

      <p
        className="text-lg text-center text-green-900"
        data-testid="not-found-message"
      >
        Page not found.
      </p>

      <Link
        href="/"
        className="text-lg text-center text-green-900 font-extrabold hover:underline"
      >
        Return to Home
      </Link>
    </div>
  );
}

import { screen, waitFor } from '@testing-library/react';

import { getRouteMain } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('app/router/AppRouter', () => {
  test('MainPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteMain(),
    });

    await waitFor(
      async () => {
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test('not found', async () => {
    componentRender(<AppRouter />, {
      route: '/afsfsfsfdsfsdfsfdsd',
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });
});

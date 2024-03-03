import { Navbar } from '@/widgets/Navbar';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import { AppRouter } from './providers/router';

const App = () => {
  return (
    <VStack className={classNames('app', {}, [])}>
      <VStack max align="center" className="page-wrapper">
        <Navbar />
        <AppRouter />
      </VStack>
    </VStack>
  );
};

export default App;

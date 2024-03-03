import { Page } from '@/widgets/Page';

import { MainPageForm } from './MainPageForm/MainPageForm';
import { MainPageHeader } from './MainPageHeader/MainPageHeader';
import { MainPageStaffList } from './MainPageStaffList/MainPageStaffList';

import cls from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Page className={cls.MainPage} data-testid="MainPage">
      <MainPageHeader />
      <MainPageStaffList />
      <MainPageForm />
    </Page>
  );
};

export default MainPage;

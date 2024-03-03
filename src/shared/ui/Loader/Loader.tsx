import { FC, memo } from 'react';

import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = memo((props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <div />
      <div className="d">
        <div className="loadingio-spinner-rolling-kf2rvmi9pl">
          <div className="ldio-zp7vkd482u">
            <div className="loader" />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
});

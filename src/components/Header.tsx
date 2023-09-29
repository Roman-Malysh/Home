import {useNavigate, useLocation} from 'react-router-dom';
import classNames from 'classnames';
import '../styles/Header.scss';

interface Props {
  setIsLoading: (isLoading: boolean) => void;
}

export const Header: React.FC<Props> = ({setIsLoading}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className='header'>
      <div className='header__top'>
        <button
          className='header__home'
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              navigate('/Home');
              setIsLoading(false);
            }, 2000);
          }}
        />
        <div className='header__linksWrap'>
          <button
            className={classNames('header__link', {
              'header__link-active':
                location.pathname === '/Home' || location.pathname === '/Startups' || location.pathname === '/Home/',
            })}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate('/Home');
                setIsLoading(false);
              }, 2000);
            }}
          >
            Startups
          </button>
          <button
            className={classNames('header__link', {
              'header__link-active': location.pathname === '/Contact',
            })}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate('/Contact');
                setIsLoading(false);
              }, 2000);
            }}
          >
            Contact
          </button>
          <button
            className={classNames('header__link', {
              'header__link-active': location.pathname === '/Career',
            })}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate('/Career');
                setIsLoading(false);
              }, 2000);
            }}
          >
            Work with us!
          </button>
        </div>
      </div>
    </header>
  );
};

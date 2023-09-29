import {useNavigate} from 'react-router-dom';
import '../styles/Footer.scss';
import {SocialIcon} from 'react-social-icons';

interface Props {
  setIsLoading: (isLoading: boolean) => void;
}

export const Footer: React.FC<Props> = ({setIsLoading}) => {
  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <div className='tablet-wrap'>
        <div className='footer__section-wrap'>
          <button
            className='footer__home'
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
              setTimeout(() => {
                setIsLoading(true);
                setTimeout(() => {
                  navigate('/Home');
                  setIsLoading(false);
                }, 2000);
              }, 500);
            }}
          />
          <div className='footer__section'>
            <p className='footer__p-gray'>© 2020 Startupz. </p>
            <p className='footer__p-gray'>All rights reserved. </p>
          </div>
        </div>
        <div className='footer__section-wrap'>
          <p className='footer__p-bold'>Companies</p>
          <p className='footer__p-blue'>Tolq</p>
          <p className='footer__p-blue'>LegalSite</p>
          <p className='footer__p-blue'>Codekeeper</p>
          <p className='footer__p-blue'>Feedback Labs</p>
        </div>
      </div>
      <div className='tablet-wrap'>
        <div className='footer__section-wrap'>
          <p className='footer__p-bold'>Contact</p>
          <a
            className='footer__p-gray footer__p-gray-link'
            href='https://www.google.com/maps/place/WTC+The+Hague+Business+Center/@52.0790193,4.3337988,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5b7059bf42e11:0x83852cb1f8e25d17!8m2!3d52.0790193!4d4.3363737!16s%2Fg%2F12qfmqxjl?entry=ttu'
            target={'_blank'}
            rel="noreferrer"
          >
            World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{' '}
            <br /> 2595 AM The Hague <br /> The Netherlands
          </a>
          <a className='footer__p-blue' href='mailto:example@gmail.com'>
            Send us an email
          </a>
        </div>
        <div className='footer__section-wrap'>
          <p className='footer__p-bold'>Follow us</p>
          <div className='social-wrap'>
            <SocialIcon
              url='wwww.twitter.com'
              bgColor='#46b8c8'
              className='footer__icon'
              style={{height: 30, width: 30}}
              href='https://twitter.com/'
            />
            <SocialIcon
              url='wwww.linkedin.com'
              href='https://www.linkedin.com/in/roman-malysh/'
              bgColor='#46b8c8'
              className='footer__icon'
              style={{height: 30, width: 30}}
            />
            <SocialIcon
              url='wwww.instagram.com'
              href='https://www.instagram.com/'
              bgColor='#46b8c8'
              className='footer__icon'
              style={{height: 30, width: 30}}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

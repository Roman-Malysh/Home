import {useNavigate} from 'react-router-dom';
import '../styles/Sturtups.scss';
import work1 from '../images/work1.svg';
import work2 from '../images/work2.svg';
import work3 from '../images/work3.svg';
import work4 from '../images/work4.svg';

interface Props {
  setIsLoading: (isLoading: boolean) => void;
}

export const Sturtups: React.FC<Props> = ({setIsLoading}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='startups'>
        <h1 className='startups__h1'>
          We Create <br />
          Startups.
        </h1>
        <p className='startups__p-orange'>
          We are startup studio that develops and launches new companies.
        </p>
        <button
          className='startups__button'
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              navigate('/Works');
              setIsLoading(false);
            }, 2000);
          }}
        >
          See our works
        </button>
      </div>
      <div className='whoWeAre'>
        <h2 className='whoWeAre__title'>Who we are</h2>
        <p className='whoWeAre__p'>
          We create products that have innovation and technology at their core.
          We value working with talented people that understand the
          possibilities of today.
        </p>
        <div className='whoWeAre__numbers-wrap'>
          <div className='whoWeAre__number'>
            <p className='whoWeAre__number-p'>01</p>
            <p className='whoWeAre__number-text'>
              We develop innovative <br /> products, systems and <br /> services
            </p>
          </div>
          <div className='whoWeAre__number'>
            <p className='whoWeAre__number-p'>02</p>
            <p className='whoWeAre__number-text'>
              Next we build teams to <br /> scale them into <br /> companies
            </p>
          </div>
          <div className='whoWeAre__number'>
            <p className='whoWeAre__number-p'>03</p>
            <p className='whoWeAre__number-text'>
              Each startup solving <br /> one problem <br /> at a time
            </p>
          </div>
        </div>
      </div>
      <div className='proplemsSolving'>We love solving problems!</div>
      <div className='values'>
        <h2 className='whoWeAre__title'>Our core values</h2>
        <div className='whoWeAre__numbers-wrap'>
          <div className='whoWeAre__number'>
            <div className='whoWeAre__number-wrap'>
              <p className='whoWeAre__number-p'>01.</p>
              <p className='whoWeAre__number-p-border'>Innovation</p>
            </div>
            <p className='whoWeAre__number-text'>
              Startupz operates where entrepreneurship <br /> and technology
              intersect. We design solutions <br /> and turn them into
              businesses models.
            </p>
          </div>
          <div className='whoWeAre__number'>
            <div className='whoWeAre__number-wrap'>
              <p className='whoWeAre__number-p'>02.</p>
              <p className='whoWeAre__number-p-border'>People</p>
            </div>
            <p className='whoWeAre__number-text'>
              Talent is what enable us <br /> to create great <br /> companies.
            </p>
          </div>
        </div>
      </div>
      <div className='works'>
        <h2 className='whoWeAre__title'>Our works</h2>
        <div className='grid'>
          <div className='company-card'>
            <h2 className='company-card__title'>Tolq</h2>
            <p className='company-card__p'>
              Tolq is the translation solution built for e-commerce. It provides
              all pieces of the localization puzzle in one single integrated
              solution.
            </p>
            <img src={work1} alt='' className='company-card__image' />
            <button className='company-card__button'>More</button>
          </div>
          <div className='company-card'>
            <h2 className='company-card__title blue'>Feedback Labs</h2>
            <p className='company-card__p'>
              Feedback Labs turns feedback into actionable insights for your
              team.
            </p>
            <img src={work2} alt='' className='company-card__image' />
            <button className='company-card__button'>More</button>
          </div>
          <div className='company-card'>
            <h2 className='company-card__title green'>Codekeeper</h2>
            <p className='company-card__p'>
              Codekeeper is an all-in-one solution for software developers and
              publishers to provide source code escrow as part of service level
              and license agreements.
            </p>
            <img src={work3} alt='' className='company-card__image' />
            <button className='company-card__button'>More</button>
          </div>
          <div className='company-card'>
            <h2 className='company-card__title violet'>LegalSite</h2>
            <p className='company-card__p'>
              Protected against legal risks, privacy compliant and always
              up-to-date with the latest regulatory developments.
            </p>
            <img src={work4} alt='' className='company-card__image' />
            <button className='company-card__button'>More</button>
          </div>
        </div>
      </div>
      <div className='article'>
        Startups create a world that actually is better. Any problem that can be
        solved, will be solved by a startup, and that is a huge opportunity.
      </div>
      <div className='hiring'>
        <h2 className='hiring__title'>We are hiring!</h2>
        <p className='hiring__p-orange m0'>
          We're always looking for talented people <br /> to join and help build
          our startups. <br /> Check out our current openings
        </p>
        <a
          className='hiring__button'
          href='https://www.linkedin.com/jobs/'
          target={'_blank'}
          rel="noreferrer"
        >
          See current openings
        </a>
      </div>
    </>
  );
};

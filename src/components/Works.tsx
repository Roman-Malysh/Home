import '../styles/Sturtups.scss';
import work1 from '../images/work1.svg';
import work2 from '../images/work2.svg';
import work3 from '../images/work3.svg';
import work4 from '../images/work4.svg';

export const Works = () => {
  return (
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
            Feedback Labs turns feedback into actionable insights for your team.
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
  );
};

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Building',
    Svg: require('@site/static/img/undraw_building-blocks_h5jb.svg').default,
    description: (
      <>
        The developer tools I built and the decisions behind them
      </>
    ),
  },
  {
    title: 'Documenting',
    Svg: require('@site/static/img/undraw_markdown-file_io4x.svg').default,
    description: (
      <>
        How I designed documentation for the tools I built
      </>
    ),
  },
  {
    title: 'Reflecting',
    Svg: require('@site/static/img/undraw_in-thought_xa50.svg').default,
    description: (
      <>
        Lessons learned, implementation notes, and other thoughts on technical writing and DX
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import classNames from 'classnames';

function SectionTitle({ className, children }) {
  return (
    <h3 className={classNames('section-title', { [className]: className })}>
      {children && children}
    </h3>
  );
}

export default SectionTitle;

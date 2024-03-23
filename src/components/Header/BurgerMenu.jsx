const INPUT_ID = 'burger-button-toggle';

function BurgerMenu() {
  return (
    <>
      <input id={INPUT_ID} type="checkbox" hidden />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={INPUT_ID} className="burger-button">
        <div className="burger-button__stripe" />
        <div className="burger-button__stripe" />
        <div className="burger-button__stripe" />
      </label>
    </>
  );
}

export default BurgerMenu;

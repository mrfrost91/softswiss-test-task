function Button({
  disabled = false,
  href = null,
  variant = 'contained',
  children = 'Button Text',
}) {
  return href ? (
    <a className={`button button_${variant} button_anchor`} href={href}>
      {children}
    </a>
  ) : (
    <button type="button" disabled={disabled} className={`button button_${variant}`}>
      {children}
    </button>
  );
}

export default Button;

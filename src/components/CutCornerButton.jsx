import { Link } from 'react-router-dom';

export default function CutCornerButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  cutSize = 15,
  innerOffset = 3,
  bgColor = '#FF822A',
  hoverBgColor = '#0C3063'
}) {
  const innerCutSize = Math.max(2, cutSize - 2);

  const buttonStyle = {
    backgroundColor: bgColor,
    clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${cutSize}px), calc(100% - ${cutSize}px) 100%, 0 100%)`
  };

  const hoverStyle = {
    backgroundColor: hoverBgColor,
    clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${cutSize}px), calc(100% - ${cutSize}px) 100%, 0 100%)`
  };

  const innerStyle = {
    clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${innerCutSize}px), calc(100% - ${innerCutSize}px) 100%, 0 100%)`
  };

  const baseClasses = `group relative inline-flex items-center justify-center px-6 py-3 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] shadow-md cursor-pointer select-none ${className}`;

  const content = (
    <>
      {/* Hover Background Color Overlay */}
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={hoverStyle}
      />

      {/* Inner White Border Line following exact cut corner shape */}
      <span 
        className="absolute border border-white pointer-events-none z-10"
        style={{
          top: `${innerOffset}px`,
          left: `${innerOffset}px`,
          right: `${innerOffset}px`,
          bottom: `${innerOffset}px`,
          ...innerStyle
        }}
      />

      {/* Button Text & Icon Content */}
      <span className="relative z-20 flex items-center gap-2  tracking-wide">
        {children}
      </span>
    </>
  );

  // If "to" prop is passed, render React Router Link
  if (to) {
    return (
      <Link to={to} className={baseClasses} style={buttonStyle} onClick={onClick}>
        {content}
      </Link>
    );
  }

  // If "href" prop is passed, render external anchor tag
  if (href) {
    return (
      <a href={href} className={baseClasses} style={buttonStyle} onClick={onClick} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  // Standard button element
  return (
    <button type={type} className={baseClasses} style={buttonStyle} onClick={onClick}>
      {content}
    </button>
  );
}

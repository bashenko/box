import Link from "next/link";
import { ReactNode } from "react";
// Update the ButtonProps type definition
type ButtonProps = {
    to?: string;
    size?: 'main' | 'secondary' | 'small';
    leadingIcon?: ReactNode;
    children: ReactNode;
    type?: 'prime' | 'secondary';
    onClick?: () => void; // Add onClick prop
  };
  
  // Update the Button component
  export const Button = ({ to, size, leadingIcon, children, type, onClick }: ButtonProps) => {
    const classNames = ['button', size, leadingIcon ? 'with-icon' : '', type];
  
    if (to) {
      return (
        <Link href={to} className={classNames.join(' ')} target='_blank' rel='noopener noreferrer'>
          {leadingIcon && <p className="icon">{leadingIcon}</p>}
          <p className="text">{children}</p>
        </Link>
      );
    } else {
      return (
        <button className={classNames.join(' ')} onClick={onClick}> {/* Use onClick prop */}
          {leadingIcon && <p className="icon">{leadingIcon}</p>}
          <p className="text">{children}</p>
        </button>
      );
    }
  };

  
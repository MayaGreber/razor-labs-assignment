import React, { ReactNode } from "react";
import "./CardBox.scss";

type CardBoxProps = {
  header: ReactNode;
  children: ReactNode | ReactNode[];
  wrapSections?: boolean; 
  className?: string;
};

const CardBox: React.FC<CardBoxProps> = ({ header, children, wrapSections = false, className = "" }) => {
  const renderBody = () => {
    if (wrapSections && Array.isArray(children)) {
      return children.map((child, i) => (
        <div key={i} className="card-box-section">
          {child}
        </div>
      ));
    }

    return <div className="card-box-section">{children}</div>;
  };

  return (
    <div className={`card-box ${className}`}>
      <div className="card-box-header">{header}</div>
      {renderBody()}
    </div>
  );
};

export default CardBox;

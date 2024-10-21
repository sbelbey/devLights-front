import React from "react";

interface DividerProps {
    className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }: DividerProps) => {
    return <hr className={className}></hr>;
};

export default Divider;

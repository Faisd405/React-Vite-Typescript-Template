import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function Case({ children }: Props) {
    return (
        <div className="grid grid-cols-12">
            <section className="col-span-10 col-start-2">{children}</section>
        </div>
    );
}

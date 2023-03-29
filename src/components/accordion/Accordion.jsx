import { useState, useRef, useEffect } from "react";
import { Chevron } from "./Chevron";

export const Accordion = (props) => {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
    }, [contentRef, active]);

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <>
            <button
                className={active ? "accordion accordion--active" : "accordion"}
                onClick={toggleActive}
            >
                <p>{props.title}</p>
                <Chevron
                    className={active ? "accordion__icon accordion__icon--rotate" : "accordion__icon"}
                    width={10}
                    fill={"#777"}
                />
            </button>
            <div ref={contentRef} className="accordion__content">
                <div>{props.children}</div>
            </div>
        </>
    )
}
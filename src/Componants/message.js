import { useEffect, useRef } from "react";

const Message = ({ isErr, message }) => {
    const msg = useRef();

    useEffect(() => {
        showMessage()
    }, [isErr, message])
    
    function showMessage() {
        if (isErr && message) {
            setTimeout(() => {
                msg.current.style.transform = "translate(-1rem)";
                setTimeout(() => {
                    msg.current.style.transform = "translate(20rem)";
                }, 4000);
            }, 1000);
        }
    }

    if (isErr) {
        return (
            <div role="alert" className="alert alert-error" ref={msg}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>{message}</span>
            </div>
        );
    }
    if (!isErr) {
        return (
            <div role="alert" className="alert alert-success" ref={msg}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>{message}</span>
            </div>
        );
    } else {
        return null;
    }
};

export default Message;

import { useEffect } from "react";

export const Timer = () => {
    useEffect(() => {
        const handleFixeHeader = () => {
            const header = document.getElementById("header");
            if (window.scrollY > 100) {
                header?.classList.add("fixed");
            } else {
                header?.classList.remove("fixed");
            }
        };
        window.addEventListener("scroll", handleFixeHeader);
        return () => {
            window.removeEventListener("scroll", handleFixeHeader);
        };
    }, []);

    return (
        <>
            <style>{`
                .fixed {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            `}</style>
            <div id="header" style={{
                padding: "20px",
                width: "100%",
                background: "black",
                color: "white"
            }}>

                <div style={{ marginTop: "70px" }}>
                    <p>Nội dung của trang web...</p>

                </div>


            </div>

        </>
    );
};

import React from "react";
import "../CSS/style.css";
import "../CSS/fonts.css";

export const ErrorPage = () => {
    return (
        <section className="error_block">

            <div className="error_txt">
                <h3>OOPS!</h3>
                <p>We can’t seem to find the page you’re looking for.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="btn_common mx-50"
                >
                    Reload
                </button>
            </div>
        </section>
    );
};

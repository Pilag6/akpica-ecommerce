/* eslint-disable react/prop-types */
import { FaHeadset } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import { MdOutlinePayment } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";

const InfoCard = ({ title, desc }) => {
    let icon;
    if (title === "FREE SHIPPING") {
        icon = <LiaShippingFastSolid />;
    } else if (title === "SECURE PAYMENT") {
        icon = <MdOutlinePayment />;
    } else if (title === "FREE RETURNS") {
        icon = <TiArrowBackOutline />;
    } else if (title === "HELP CENTER") {
        icon = <FaHeadset />;
    } 

    return (
        <article className="info-card">
            {icon}
            <h3>{title}</h3>
            <p>{desc}</p>
        </article>
    );
};

export default InfoCard;

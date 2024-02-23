import "./Info.css";
import InfoCard from "./InfoCard.jsx";

const Info = () => {
    return (
        <section className="info">
            <InfoCard
                title="HELP CENTER"
                desc="Got a question? Look no further Browse our FAQs."
            />
            <InfoCard
                title={"FREE SHIPPING"}
                desc={"On all order over $75.00"}
            />

            <InfoCard
                title="SECURE PAYMENT"
                desc="Moving your card details to a much more secured place"
            />
            <InfoCard
                title="FREE RETURNS"
                desc="Replacement or refund within 30 days of purchase."
            />
        </section>
    );
};

export default Info;

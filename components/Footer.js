// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Created By Vasudha
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-copyright"></i>
            {year}
            <strong>
                <span>Tandoor</span>
            </strong>
        </div>
    );
};

export default Footer;
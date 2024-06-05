import './CalltoAction.scss'

const CalltoAction = () => {
    return (
        <div className="cta-section">
            <div className="cta-content">
                <h2>Join Us in Creating a Cleaner Environment</h2>
                <p>Take the first step towards a greener future. Partner with us to ensure efficient and responsible waste management in your community. Together, we can make a significant impact on our environment.</p>
                <button className="cta-button">Get Started</button>
            </div>
            <div className="cta-images">
                <img src='/image1.jpg' alt="Waste Management 1" />
                <img src='/image2.jpg' alt="Waste Management 2" />
                <img src='/image3.jpg' alt="Waste Management 3" />
                <img src='/image1.jpg' alt="Waste Management 3" />

            </div>
        </div>
    )
}

export default CalltoAction
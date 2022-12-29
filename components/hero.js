import * as image from '../preeya_dd.jpg';

export default function Hero() {
    return (
        <div classNameName="hero-super">
            <div
                className="container col-xxl-6 px-4 py-4"
            >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-4">
                    <img src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-1/299806545_2866124107024625_3634498144555349320_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wWn5DO7Dst4AX8AxrKy&_nc_ht=scontent.fktm19-1.fna&oh=00_AfA5a6A2f3tUOQUKbopXotP77m_w6iRgS4OK0RF66tMKnA&oe=63AE13AE"
                        className="d-block mx-lg-none img-fluid rounded-circle mr-auto ml-auto" alt="Bootstrap Themes" loading="lazy"
                    />
                    <div
                        style={{
                            marginTop: '0.6rem',
                            marginRight: '1.4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.6rem',
                            textAlign: 'center'
                        }}
                    >
                        <h1 className="display-5 fw-bold lh-1 mb-4 text-dark">Hello there, It's Preeya here!</h1>
                        <p className="lead text-muted">Hey, Myself Preeya Shrestha. I'm currently enrolled at WRC (Western Regional College) located inside Pokhara Valley, majoring in Civil Engineering.</p>
                        <div
                            className="d-flex d-md-flex justify-content-md-start"
                            style={{
                                gap: '2rem'
                            }}
                        >
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
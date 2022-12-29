import Link from "next/link";

export default function NavBar({ children }) {

    const navBarElements = [
        "Home", "About me", "My Blogs", "Contact Me"
    ]

    return (
        <nav className="nav-bar">
            <nav class="navbar navbar-expand-lg navbar-light bg-none p-3">
                <Link className="navbar-brand text-muted"
                    style={{
                        fontSize: '1.6rem',
                        textAlign: 'center',
                        color: '#666',
                        marginRight: '2rem',
                        fontWeight: '500',
                        letterSpacing: '1px '
                    }}
                    href="/">Preeya Stha</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup"
                    style={{
                        justifyContent: 'end'
                    }}
                >
                    <div className="navbar-nav"
                        style={{
                            gap: '1rem'
                        }}
                    >
                        {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Pricing</a>
                        <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
                        {
                            navBarElements.map(item => {
                                return (
                                    <Link
                                        className="nav-bar-link nav-item nav-link"
                                        href={`/${(item === "Home") ? '' : item.toLowerCase().replace(/\s/g, '_')}`}
                                        style={{
                                            fontSize: '1.28rem',
                                        }}
                                    >{item}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </nav>
            {children}
        </nav>
    );
}
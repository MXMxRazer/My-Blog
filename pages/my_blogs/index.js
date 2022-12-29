import HTML from "../../components/HTML/basicHTML";
import TitleChanger from "../../components/titleChanger/titleChanger";

export default function BlogMain() {

    const title = "My Blogs";

    TitleChanger({
        title: title
    });

    return (
        <HTML>
            <div
                className="blog-main"
                style={{
                    padding: '1rem'
                }}
            >
                <p
                    className="text-muted mt-2"
                    style={{
                        width: '100%',
                        fontSize: '2.4rem',
                        fontWeight: '350'
                    }}
                >Blogs</p>
                <div className="card"
                    style={{
                        fontSize: '1.12rem',
                        border: 'none',
                        color: '#666',
                    }}
                >
                    <div class="card mb-3"
                        style={{
                            borderColor: '#bbb'
                        }}
                    >
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </HTML>
    );
}
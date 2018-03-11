import React from 'react'
import "tachyons/css/tachyons.css";

export default () => (
    <article className="sans-serif lh-copy measure-wide center ph3 ph0-l">

        <header>
            <h1 className="fw4 lh-solid mb0">Greg Thompson</h1>
            <h2 className="fw4 mt0">Design-Focused Engineer</h2>
        </header>

        <main className="f5 fw2">
            <h3 className="lh-title">Human-centered system builder focusing on accessible front-end architecture and interface design systems</h3>

            <section className="mb4">
                <div>
                    <span className="fw6">Work</span>
                    <div>Currently Aviture; formerly Mutual of Omaha, GoodTwin, and HDR, Inc. Projects of varying sizes with organizations such as GE, USAF, IBM, and CSG International.</div>
                </div>
            </section>

            <section className="mb4">
                <div>
                    <span className="fw6">Gist</span>
                    <div>Design-focused development with JavaScript and (S)CSS by way of React and Angular using a systems approach to interfaces. Experienced with standard web technologies, a host of build tools, some server-side languages, and all the bits in between.</div>
                </div>
            </section>

            <section className="mb4">
                <div>
                    <span className="fw6">Education</span>
                    <div>English/Language Studies and Biochemistry at the University of Nebraska-Omaha and Rockhurst University.</div>
                </div>
            </section>
        </main>

        <footer className="f5 fw2">
            <span className="fw6">Contact</span>
            <div>Email to greg [at] thompsongl.com</div>
            <div>@thompsongl on GitHub, Twitter, and almost everywhere else</div>
        </footer>
    </article>
)

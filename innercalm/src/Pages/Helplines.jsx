import React, { useEffect } from "react"
import Nav from '../components/Nav_nothome'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Helplines.css'

const Helplines = () => {

    useEffect(() => {
        // Update document title when component mounts
        document.title = 'InnerCalm - Helplines';
        // Clean up document title when component unmounts
        return () => {
            document.title = 'InnerCalm';
        }
    }, []);



    return (
        <>
            <Nav />
            <div className="helplinespage">
                <div className="t1">
                    <h1>HELPLINES</h1>
                </div>
                <div className="t2">
                    <div className="row">
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Mitram Foundation</h2>
                            </div>
                            <div className="info">
                                <p>Mitram Foundation is a suicide prevention helpline that aims to offer emotional support to those
                                    going through a crisis in their lives, especially the distressed, depressed and suicidal.</p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline : 080 2572 2573, +91 901 9708133</p>
                            </div>
                            <div className="website">
                                <a className="btn2" href="https://www.mitramfoundation.org/">Visit</a>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Parivarthan</h2>
                            </div>
                            <div className="info">
                                <p>Parivarthan Counselling, Training and Research Centre is a registered, non-profit society that
                                    provides multimodal services in the field of mental health. </p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline : +91-7676602602</p>
                            </div>
                            <div className="website">
                                <a className="btn2" href="https://parivarthan.org/">Visit</a>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Vandrevala Foundation</h2>
                            </div>
                            <div className="info">
                                <p>Cyrus & Priya Vandrevala Foundation is a non-profit organisation that aims to provide significant
                                    funding and aid contributions for those suffering from mental health problems and illnesses in
                                    India.</p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline : 9999 666 555 | +1(256)6662142</p>
                            </div>
                            <div className="website">
                                <a className="btn2" href="https://www.vandrevalafoundation.com/">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border">
                </div>

                <div className="t1">
                    <div className="row">
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Sangath</h2>
                            </div>
                            <div className="info">
                                <p>Sangath is a not-for-profit organisation working in Goa, India for 24 years to make mental health
                                    services accessible and affordable.</p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline: 011-41198666</p>
                            </div>
                            <div className="website">
                                <a className="btn" href="https://sangath.in/">Visit</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Voice That Cares (ROCF)</h2>
                            </div>
                            <div className="info">
                                <p>Voice That Cares is a free public helpline that provides psychosocial counselling support on a
                                    wide range of mental health matters including anxiety, fear, etc. </p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline: 8448-8448-45</p>
                            </div>
                            <div className="website">
                                <a className="btn" href="https://www.rocf.org/voice-that-cares/">Visit</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Connecting Trust</h2>
                            </div>
                            <div className="info">
                                <p>Connecting NGO is a non-judgemental, non-advisory, confidential and anonymous space for those
                                    feeling low, distressed and/or suicidal.</p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline: +91-9922001122, +91-9922004305</p>
                            </div>
                            <div className="website">
                                <a className="btn" href="https://connectingngo.org">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="t2">
                    <div className="row">
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Roshni Trust</h2>
                            </div>
                            <div className="info">
                                <p>Roshni trust is a voluntary organization that values human life. Roshni helpline comes under its
                                    umbrella. </p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline: 040-66202000, 040-66202001</p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Lifeline</h2>
                            </div>
                            <div className="info">
                                <p>Lifeline offers a free tele-helpline providing emotional support to people who are in despair,
                                    depressed or suicidal.</p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline: 033-40447437, +91-9088030303</p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="subheading">
                                <h2>Mann Talks</h2>
                            </div>
                            <div className="info">
                                <p>A Shantital Shanghvi Foundation initiative, Mann Talks focuses on empowering individuals to take
                                    charge of their mental health.</p>
                            </div>
                            <div className="Helpline">
                                <p>Helpline: +91-8686139139</p>
                            </div>
                            <div className="website">
                                <a className="btn2" href="http://www.manntalks.org">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Helplines
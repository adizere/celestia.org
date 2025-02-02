import * as React from "react"
// import Image from "../imageComponent";

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            banner : true
        }
    }
    closeBanner = () => {
        const self = this;
        document.getElementById("banner").classList.add("hide");
        setTimeout(function (){
            localStorage.setItem('modular-fellows-banner', 'true')
            self.setState({banner:false})
        },600);
    };

    componentDidMount() {
        if (localStorage.getItem('modular-fellows-banner')) {
            this.setState({banner:false})
        }
    }

    render() {

        return this.state.banner === true ? <div id={'banner'} className="banner">
            <div className={'container'}>
                <div className={'close-banner'} onClick={this.closeBanner}><i className={'icon-close'}></i></div>
                <div className={'row w-80 align-items-center justify-content-center'}>
                    {/* <div className={'col-2 position-relative d-none d-md-flex'}>
                        <Image alt={'Modular Summit'} filename={'modular-summit.svg'} />
                    </div> */}
                    <div className={'col-auto'}>Modular Fellows applications are now open!</div>

                    <a className={'col-auto'} href="https://blog.celestia.org/introducing-modular-fellows" target={'_blank'} rel={'noreferrer'}>
                        <div>
                            <button className={'button-simple sm'}>Learn more</button>
                        </div>
                    </a>
                </div>
            </div>
        </div> : ''
    }
}

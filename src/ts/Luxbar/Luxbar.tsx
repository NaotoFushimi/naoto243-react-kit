import * as React from 'react';

interface Props {

}

interface State {

}

export default class Luxbar extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="luxbar-fixed">
                    <input type="checkbox" id="luxbar-checkbox"/>
                    <div className="luxbar-menu luxbar-menu-right luxbar-menu-material-cyan">
                        <ul className="luxbar-navigation">
                            <li className="luxbar-header">
                                <a href="#" className="luxbar-brand">LUXBAR</a>
                                <label className="luxbar-hamburger luxbar-hamburger-doublespin"
                                       id="luxbar-hamburger"
                                       htmlFor="luxbar-checkbox"
                                >
                                    <span>

                                    </span>
                                </label>
                            </li>
                            <li className="luxbar-item"><a href="#">Item 1</a></li>
                            <li className="luxbar-item"><a href="#">Item 2</a></li>
                            <li className="luxbar-item"><a href="#">Item 3</a></li>
                            <li className="luxbar-item"><a href="#">Item 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

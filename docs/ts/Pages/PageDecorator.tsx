import * as React from 'react';

const style = require("./PageStyle.pcss");

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

export  function PageDecorater(Component : React.ComponentClass<any>){

    const clazz : any = class extends Component {

        render() {
            const {...props} = this.props;

            return (
                <div className={style.page}>
                    <Component {...props} />
                </div>
            );
        };
    }

    return clazz;

}


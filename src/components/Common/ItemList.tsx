import * as React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../store/selector/items';
import Item from '../../store/models/Item';
import { State } from '../../store/reducers';

interface Props {
    itemList: Item[]
}

class ItemList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        return (
            <div>
            {
                this.props.itemList.map((item, index) => {
                    return (
                        <div key={index}>
                            <span>{item.firstName}</span>
                            <span>{item.lastName}</span>
                            <span>{item.birthday}</span>
                            <span>{item.phoneNumber}</span>
                        </div>)
                })
            }
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    itemList: getTodos(state)
})

export default connect<any, any, any>(mapStateToProps, null)(ItemList)
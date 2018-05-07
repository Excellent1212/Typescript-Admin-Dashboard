import * as React from  'react';
import { connect } from 'react-redux';
import { AddItem } from '../../store/action/item';
import './DataForm.css';

interface Props {
    firstName: string,
    lastName: string,
    birthday: string,
    phoneNumber: string,
    addItem: (first: string, last: string, birthday: string, phone: string) => void
}

interface State {
    firstName: string,
    lastName: string,
    birthday: string,
    phoneNumber: string
}

class DataForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            birthday: props.birthday,
            phoneNumber: props.phoneNumber
        }

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onBirthdayChange = this.onBirthdayChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onFirstNameChange(evt: any) {
        this.setState({firstName: evt.target.value});
    }

    onLastNameChange(evt: any) {
        this.setState({lastName: evt.target.value});
    }

    onBirthdayChange(evt: any) {
        this.setState({birthday: evt.target.value});
    }

    onPhoneNumberChange(evt: any) {
        this.setState({phoneNumber: evt.target.value});
    }

    onClick() {
        this.props.addItem(this.state.firstName, this.state.lastName, this.state.birthday, this.state.phoneNumber);
    }

    public render() {
        return (
            <div>
                <div>
                    <p>First Name</p>
                    <input type="text" className="firstName" value={this.state.firstName} onChange={this.onFirstNameChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input className="lastName" value={this.state.lastName} onChange={this.onLastNameChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input className="birthday" value={this.state.birthday} onChange={this.onBirthdayChange}  />
                </div>
                <div>
                    <label>First Name</label>
                    <input className="phonenumber" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange} />
                </div>
                <div>
                    <button onClick={this.onClick} value="Add Data" />
                </div>
            </div>
        )
    }
}

export default connect<any, any, any>(null, {
    addItem: AddItem
})(DataForm);
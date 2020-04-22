import React, { Component } from 'react'
import {Button, Spin, Typography, Steps, Result} from 'antd'
import { Link } from 'react-router-dom'
import { handleTeamCreation } from './Api'
import {CLIENT_URL} from "../../settings";

class InvitePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inviteCode: this.props.match.params.id,
            success: null,
            teamName: '',
            errorText: '',
            history: null
        }
    }

    componentDidMount() {
        const setSuccessState = (teamName) => { this.setState({teamName: teamName, success: true}) };
        const setError = (error) => { this.setState({success: false, errorText: error.statusText}) };
        handleTeamCreation(this.state.inviteCode, setError, setSuccessState)
    }


    render () {
        const getRepresentationByState = () => {
            if (this.state.success) {
                return (
                    <React.Fragment>
                        <Result
                            status="success"
                            title={ "Вы вступили в команду «" + this.state.teamName + "»"}
                            extra={[
                                <React.Fragment>
                                    <Link to ='/' >
                                        <Button type={'primary'} size={'large'}>Ну и отлично</Button>
                                    </Link>
                                </React.Fragment>
                            ]}
                        />
                    </React.Fragment>
                )
            } else {
                return(
                    <Result
                        status="warning"
                        title={this.state.errorText}
                        extra={[
                            <React.Fragment>
                                <Link to ='/' >
                                    <Button type={'primary'} size={'large'} >ОК</Button>
                                </Link>
                            </React.Fragment>
                        ]}
                    />

                )
            }
        };

        if (this.state.success === null) {
            return <Spin />
        } else {
            return (
                <React.Fragment>
                    {getRepresentationByState()}
                </React.Fragment>
            )
        }
    }
}

export default InvitePage

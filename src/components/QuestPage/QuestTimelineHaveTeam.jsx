import React from 'react'
import {Button, Col, Row, Steps} from 'antd'
import "./QuestTimeline.css"
import {
    Loading3QuartersOutlined,
    CheckCircleOutlined,
    PlayCircleFilled,
    CheckOutlined,
    ClockCircleOutlined, StarOutlined
} from '@ant-design/icons'
import {Link, useHistory} from 'react-router-dom'

let dateTimeNow = new Date();


const {Step} = Steps;

function RegDescription(props) {
    return <div className={"description"}>{props}</div>
}

function QuestTimelineHaveTeam(props) {

    const history = useHistory();
    const remainingTime = new Date(props.quest.endDate).getHours() * 60 + new Date(props.quest.endDate).getMinutes() -
        ((dateTimeNow.getHours()) * 60 + dateTimeNow.getMinutes());
    const remainingHours = parseInt(remainingTime / 60);
    const remainingMinutes = remainingTime % 60;
    const commonOptions = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: false
    };

    const remainingTimeText = 'Осталось ' + remainingHours.toString() + ' ч ' + remainingMinutes.toString() + ' мин';
    const regDeadline = 'до ' + new Intl.DateTimeFormat('default', commonOptions).format(new Date(props.quest.registrationDeadline));
    const startTime = new Intl.DateTimeFormat('default', commonOptions).format(new Date(props.quest.startDate)).toString();
    const endTime = new Intl.DateTimeFormat('default', commonOptions).format(new Date(props.quest.endDate)).toString();
    if (props.quest.status === "scheduled") {
        return (
            <React.Fragment>
                <Row style={{marginTop: "15px"}} gutter={[16, 16]}>
                    <Col span={6}>
                        <div style={{width: "100%"}}>
                                <div className={'status-layout'} style={{"color": "#faad14"}}><Loading3QuartersOutlined
                                    spin/> &#160;Идет регистрация
                                </div>
                            <div className={'button-layout'}>
                                <Button type="primary"
                                        htmlType="submit"
                                        className="button"
                                        onClick="Nothing"
                                        disabled={true}
                                >
                                    Ты в команде <CheckOutlined/>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Steps current={0}>
                            <Step title="Регистрация" subTitle="" description={RegDescription(regDeadline)}/>
                            <Step title="Старт" subTitle="" description={startTime}/>
                            <Step title="Завершение" description={endTime}/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    } else if (props.quest.status === "registrationover") {
        return (
            <React.Fragment>
                <Row style={{marginTop: "15px"}} gutter={[16, 16]}>
                    <Col span={6}>
                        <div style={{width: "100%"}}>
                                <div className={'status-layout'} style={{"color": "#1890ff"}}>
                                    <CheckCircleOutlined/>&thinsp;Регистрация окончена
                                </div>
                            <div className={'button-layout'}>
                                <Button type="primary"
                                        htmlType="submit"
                                        className="button"
                                        onClick="Nothing"
                                        disabled={true}
                                >
                                    Ты в команде <CheckOutlined/>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Steps current={1}>
                            <Step title="Регистрация" subTitle="" description={RegDescription(regDeadline)}/>
                            <Step title="Старт" subTitle="" description={startTime}/>
                            <Step title="Завершение" description={endTime}/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    } else if (props.quest.status === "inprogress") {
        return (
            <React.Fragment>
                <Row style={{marginTop: "15px"}} gutter={[16, 16]}>
                    <Col span={6}>
                        <div style={{width: "100%"}}>
                                <div className={'status-layout'} style={{"color": "#52c41a"}}>
                                    <PlayCircleFilled/> &#160;Сейчас
                                </div>
                            <div className={'button-layout'}>
                                <Button type="primary"
                                        htmlType="submit"
                                        className="button"
                                        onClick={() => {
                                            history.push("/quests/" + props.quest.id + "/play")
                                        }
                                        }
                                >
                                    Открыть задания
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Steps current={1}>
                            <Step title="Регистрация" subTitle="" description={RegDescription(regDeadline)}/>
                            <Step title="Старт" subTitle={remainingTimeText} description={startTime}/>
                            <Step title="Завершение" description={endTime}/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
    else if (props.quest.status === "finished" && props.quest.status !== 'resultsavailable'){
        return (
            <React.Fragment>
                <Row style={{marginTop: "15px"}} gutter={[16, 16]}>
                    <Col span={6}>
                        <div style={{width: "100%"}}>
                            <div className={'status-layout'} style={{"color": "#1890ff"} }><ClockCircleOutlined /> &#160;Ждём результаты</div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Steps current={2}>
                            <Step title="Регистрация" subTitle="" description={RegDescription(regDeadline)}/>
                            <Step title="Старт" subTitle={remainingTimeText} description={startTime}/>
                            <Step title="Завершение" description={endTime}/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Row style={{marginTop: "15px"}} gutter={[16, 16]}>
                    <Col span={6}>
                        <div style={{width: "100%"}}>
                            <div className={'status-layout'} style={{"color": "#8c8c8c"} }><CheckCircleOutlined /> &#160;Завершён</div>
                            <div className={'button-layout'}>
                                <Button type="primary"
                                        htmlType="submit"
                                        style={{ "background-color": "#52c41a", "border-color": "#52c41a" }}
                                        className="button"
                                        onClick={function() {
                                            document.location = 'https://docs.google.com/forms/d/e/1FAIpQLSczHbtw8c05IanZ02rcDvzMw37t7-CDtkiw9oiOpgesFZxiNw/viewform'}}
                                >
                                    <StarOutlined/> Оставить отзыв
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Steps current={2}>
                            <Step title="Регистрация" subTitle="" description={RegDescription(regDeadline)}/>
                            <Step title="Старт" subTitle="" description={startTime}/>
                            <Step title="Завершён" description={endTime}/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default QuestTimelineHaveTeam

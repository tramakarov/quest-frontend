import React from 'react'
import {Button, Col, Row, Steps, Typography} from 'antd'
import { Loading3QuartersOutlined, CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons'
let dateTimeNow = new Date();


const { Title, Paragraph } = Typography;
const { Step } = Steps

function QuestTimeline (props) {
    const remainingTime = new Date(props.quest.endDate).getHours()*60 + new Date(props.quest.endDate).getMinutes() -
        (dateTimeNow.getHours()*60 + dateTimeNow.getMinutes());
    const remainingHours = parseInt(remainingTime/60);
    const remainingMinutes = remainingTime%60;
    const remainingTimeText = 'Осталось ' + remainingHours.toString() + ' ч ' + remainingMinutes.toString() + ' мин';
    const regDeadline = 'до ' + new Date(props.quest.registrationDeadline).getDay().toString() + '/' +
        new Date(props.quest.registrationDeadline).getMonth().toString() + '/' +
        new Date(props.quest.registrationDeadline).getFullYear().toString() + '/ ' +
        new Date(props.quest.registrationDeadline).getHours().toString() + ':' +
        new Date(props.quest.registrationDeadline).getMinutes().toString();

    const startTime = new Date(props.quest.startDate).getDay().toString() + '/' +
        new Date(props.quest.startDate).getMonth().toString() + '/' +
        new Date(props.quest.startDate).getFullYear().toString() + '/ ' +
        new Date(props.quest.startDate).getHours().toString() + ':' +
        new Date(props.quest.startDate).getMinutes().toString();

    const endTime = new Date(props.quest.endDate).getDay().toString() + '/' +
        new Date(props.quest.endDate).getMonth().toString() + '/' +
        new Date(props.quest.endDate).getFullYear().toString() + '/ ' +
        new Date(props.quest.endDate).getHours().toString() + ':' +
        new Date(props.quest.endDate).getMinutes().toString();

    if (new Date(props.quest.registrationDeadline).getMonth() >= dateTimeNow.getMonth()
        && new Date(props.quest.registrationDeadline).getDate() >= dateTimeNow.getDate()
        && new Date(props.quest.registrationDeadline).getTime() > dateTimeNow.getTime()) {
        return (
            <React.Fragment>
                <Row type="flex">
                    <Col>
                        <Loading3QuartersOutlined /> Идет регистрация
                        <p>
                            <Button type="primary" htmlType="submit" className="button">
                                Регистрация на квест
                            </Button>
                        </p>
                    </Col>
                    <Col span={15} offset={1}>
                        <Steps current={0}>
                            <Step title="Регистрация" subTitle="" description={regDeadline}/>
                            <Step title="Старт" subTitle="" description={startTime}/>
                            <Step title="Завершение" description={endTime}/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
    else if (new Date(props.quest.startDate).getMonth() === dateTimeNow.getMonth()
        && new Date(props.quest.startDate).getDate() === dateTimeNow.getDate()
        && new Date(props.quest.startDate).getTime() <= dateTimeNow.getTime() &&
        new Date(props.quest.endDate).getTime() > dateTimeNow.getTime()){
        return (
            <React.Fragment>
                <Row type="flex">
                    <Col>
                        <LoadingOutlined /> Сейчас
                    </Col>
                    <Col>
                        <Steps current={1}>
                            <Step title="Регистрация" subTitle="" description="окончание регистрации"/>
                            <Step title="Старт" subTitle={remainingTimeText} description="дата старта"/>
                            <Step title="Заевршение" description="дата завершения"/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Row type="flex">
                    <Col>
                        <CheckCircleOutlined /> Завершён
                    </Col>
                    <Col>
                        <Steps current={2}>
                            <Step title="Регистрация" subTitle="" description="окончание регистрации"/>
                            <Step title="Старт" subTitle="" description="дата старта"/>
                            <Step title="Завершён" description="дата завершения"/>
                        </Steps>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default QuestTimeline
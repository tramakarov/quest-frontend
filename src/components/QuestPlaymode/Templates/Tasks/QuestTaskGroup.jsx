import React from 'react'
import PropTypes from 'prop-types'
import { Col, Divider, Input, Row } from 'antd'
import './Tasks.css'
import Hint from './Hint'
import ReactMarkdown from 'react-markdown'
import AnswerStatus from './AnswerStatus'

export default function QuestTaskGroup (props) {
  const forgeHintsArray = (taskData) => {
    const getDefaultData = (number) => {
      return {
        isHidden: true,
        content: '',
        id: taskData.id,
        number: number,
        key: number,
        getHintCallback: props.getHintCallback
      }
    }

    const hintArray = {
      0: getDefaultData(0),
      1: getDefaultData(1),
      2: getDefaultData(2)
    }

    Object.values(taskData.usedHints).forEach(
      usedHint => {
        console.log(taskData.id)
        hintArray[usedHint.number] = {
          isHidden: false,
          content: usedHint.secret,
          id: taskData.id,
          number: usedHint.number,
          key: usedHint.number,
          getHintCallback: props.getHintCallback
        }
      }
    )

    console.log(hintArray)
    return (hintArray)
  }

  const forgeHints = (taskData) => {
    return Object.values(forgeHintsArray(taskData)).map(hint =>
      <Hint {...hint}/>)
  }

  const forgeTaskPanel = (taskData) => {
    console.log(taskData)
    console.log(taskData.question)
    return (
      <React.Fragment>
        <Row>
          <Col sm={8}>
            <p><b>{taskData.name}</b></p>
            <p>{<ReactMarkdown source={taskData.question} />}</p>
          </Col>
          <Col sm={16}>
            { forgeHints(taskData) }
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <div className={'quest-answer-input__container'}>
              <Input.Search
                placeholder="Ответ"
                enterButton=">"
                onSearch={value => props.sendTaskCallback(taskData.id, value)}
              />
            </div>
          </Col>
          <Col sm={16}>
            <AnswerStatus
              lastSubmittedAnswer={taskData.lastSubmittedAnswer}
              manualVerificationEnabled={taskData.manualVerificationEnabled}
              status={taskData.status}
              adminComment={taskData.adminComment}
            />
          </Col>
        </Row>
        <Divider/>
      </React.Fragment>
    )
  }

  const forgeTaskGroupPanels = () => {
    return props.taskGroupData.map(
      taskData => { return (forgeTaskPanel(taskData)) }
    )
  }

  return (
    <React.Fragment>
      { forgeTaskGroupPanels() }
    </React.Fragment>
  )
}

QuestTaskGroup.propTypes = {
  taskGroupData: PropTypes.array,
  sendTaskCallback: PropTypes.func,
  updateTasksCallback: PropTypes.func,
  getHintCallback: PropTypes.func
}

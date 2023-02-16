import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  TextArea,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    inputValue: '',
    isClickedBold: false,
    isClickedItalic: false,
    isClickedUnderline: false,
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onTriggerBold = () => {
    this.setState(prevState => ({isClickedBold: !prevState.isClickedBold}))
  }

  onTriggerItalic = () => {
    this.setState(prevState => ({isClickedItalic: !prevState.isClickedItalic}))
  }

  onTriggerUnderline = () => {
    this.setState(prevState => ({
      isClickedUnderline: !prevState.isClickedUnderline,
    }))
  }

  renderEditor = () => {
    const {
      inputValue,
      isClickedBold,
      isClickedItalic,
      isClickedUnderline,
    } = this.state
    return (
      <div className="bg-card">
        <div>
          <h1 className="text-head">Text Editor</h1>
          <img
            className="text-editor-img"
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="buttons-cont">
          <ul className="icons-buttons-lst">
            <li>
              <BoldButton
                data-testid="bold"
                type="button"
                isClickedBold={isClickedBold}
                onClick={this.onTriggerBold}
              >
                <VscBold size={25} />
              </BoldButton>
            </li>
            <li>
              <ItalicButton
                data-testid="italic"
                type="button"
                isClickedItalic={isClickedItalic}
                onClick={this.onTriggerItalic}
              >
                <GoItalic size={25} />
              </ItalicButton>
            </li>
            <li>
              <UnderlineButton
                data-testid="underline"
                type="button"
                isClickedUnderline={isClickedUnderline}
                onClick={this.onTriggerUnderline}
              >
                <AiOutlineUnderline size={25} />
              </UnderlineButton>
            </li>
          </ul>
          <div className="hr-line-cont">
            <hr className="hr-line" />
          </div>
          <TextArea
            isClickedBold={isClickedBold}
            isClickedItalic={isClickedItalic}
            isClickedUnderline={isClickedUnderline}
            className="text-area"
            rows="20"
            cols="30"
            onChange={this.onChangeInput}
            value={inputValue}
          />
        </div>
      </div>
    )
  }

  render() {
    return <div className="main-bg-cont">{this.renderEditor()}</div>
  }
}
export default TextEditor

import styled from 'styled-components'

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 18px;
  font-weight: ${props => (props.isClickedBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isClickedItalic ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isClickedUnderline ? 'underline' : 'normal'};
  flex-wrap: wrap;
`
export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isClickedBold ? '#faff00' : '#f1f5f9')};
  margin-top: 0px;
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isClickedItalic ? '#faff00' : '#f1f5f9')};
  margin-top: 0px;
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isClickedUnderline ? '#faff00' : '#f1f5f9')};
  margin-top: 0px;
`

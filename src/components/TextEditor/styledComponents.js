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
    props.isClickedUnderline ? 'underline' : 'none'};
  flex-wrap: wrap;
`
export const BoldIcon = styled.i`
  color: ${props => (props.isClickedBold ? '#faff00' : '#f1f5f9')};
`
export const ItalicIcon = styled.i`
  color: ${props => (props.isClickedItalic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineIcon = styled.i`
  color: ${props => (props.isClickedUnderline ? '#faff00' : '#f1f5f9')};
`

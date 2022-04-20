import styled from "styled-components";

const MyStyledButton = styled.button`
  border: 1px dotted yellow;
  background: lavnder;
  color: black;
  font-weight: 500;
  margin: 20px;
  padding: 9px;
  font-size: 14px;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 5px;
  transition: color 100ms;
  &: hover {
    background: azure;
    cursor: pointer;
  }
`

export default MyStyledButton;


// <!-- HTML !-->
// <button class="button-1" role="button">Button 1</button>
//
//     /* CSS */
//     .button-1 {
//     background-color: #EA4C89;
//     border-radius: 8px;
//     border-style: none;
//     box-sizing: border-box;
//     color: #FFFFFF;
//     cursor: pointer;
//     display: inline-block;
//     font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
//     font-size: 14px;
//     font-weight: 500;
//     height: 40px;
//     line-height: 20px;
//     list-style: none;
//     margin: 0;
//     outline: none;
//     padding: 10px 16px;
//     position: relative;
//     text-align: center;
//     text-decoration: none;
//     transition: color 100ms;
//     vertical-align: baseline;
//     user-select: none;
//     -webkit-user-select: none;
//     touch-action: manipulation;
// }
//
// .button-1:hover,
// .button-1:focus {
//     background-color: #F082AC;
// }